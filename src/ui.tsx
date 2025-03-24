import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Annotation, AnnotationSettings, MessageToPlugin, MessageToUI } from "./types";
import { Editor } from "./components/Editor";
import { Settings } from "./components/Settings";
import { Button } from "./components/Button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, X, Info, Trash, List, Square, ChevronDown, ChevronRight, Check, Pencil, Focus } from "lucide-react";
import "./ui.css";

const App: React.FC = () => {
  // 상태 관리
  const [selectedFrame, setSelectedFrame] = React.useState<{ id: string; name: string } | null>(null);
  const [annotations, setAnnotations] = React.useState<Annotation[]>([]);
  const [isCreatingAnnotation, setIsCreatingAnnotation] = React.useState(false);
  const [newAnnotationDescription, setNewAnnotationDescription] = React.useState("");
  const [selectedAnnotation, setSelectedAnnotation] = React.useState<Annotation | null>(null);
  const [fileTitle, setFileTitle] = React.useState<string>("Design File");
  const [pageName, setPageName] = React.useState<string>("Page 1");
  const [isPageExpanded, setIsPageExpanded] = React.useState<boolean>(true);
  const [parentFrameName, setParentFrameName] = React.useState<string | null>(null);
  // 프레임별 확장 상태를 관리하는 상태 추가
  const [expandedFrames, setExpandedFrames] = React.useState<Record<string, boolean>>({});
  // 선택된 프레임명을 관리하는 상태 추가
  const [selectedFrameName, setSelectedFrameName] = React.useState<string | null>(null);
  // 편집 중인 주석 상태 관리
  const [editingAnnotations, setEditingAnnotations] = React.useState<Record<string, {description: string }>>({});
  // 편집 중인 주석의 변경 상태 관리
  const [isAnnotationEdited, setIsAnnotationEdited] = React.useState<Record<string, boolean>>({});
  
  // 설정 상태
  const [settings, setSettings] = React.useState<AnnotationSettings>({
    color: "#6E56CF",
    fontSize: "small",
    cardWidth: "small",
  });

  // 플러그인으로부터 메시지 수신
  React.useEffect(() => {
    window.onmessage = (event) => {
      const message = event.data.pluginMessage as MessageToUI;
      
      if (!message) return;
      
      switch (message.type) {
        case "FRAME_SELECTED":
          setSelectedFrame({ id: message.frameId, name: message.frameName });
          // 피그마 파일명과 페이지명 설정
          setFileTitle(message.fileTitle);
          setPageName(message.pageName);
          // 최상위 프레임 이름 설정
          setParentFrameName(message.parentFrameName || message.frameName);
          // 모든 주석으로 업데이트 (선택된 프레임으로 필터링하지 않음)
          setAnnotations(message.annotations);
          break;
        case "NO_FRAME_SELECTED":
          setSelectedFrame(null);
          // 프레임이 선택되지 않아도 모든 주석 표시
          setAnnotations(message.annotations);
          setFileTitle(message.fileTitle);
          setPageName(message.pageName);
          break;
        case "ANNOTATION_CREATED":
          setAnnotations((prev) => [...prev, message.annotation]);
          // 피그마 파일명과 페이지명 설정
          setFileTitle(message.fileTitle);
          setPageName(message.pageName);
          // 최상위 프레임 이름 설정
          setParentFrameName(message.parentFrameName || message.annotation.frameName);
          setIsCreatingAnnotation(false);
          setNewAnnotationDescription("");
          break;
        case "ANNOTATION_UPDATED":
          // 업데이트된 주석을 상태에 반영
          setAnnotations((prev) => 
            prev.map(annotation => 
              annotation.id === message.annotation.id 
                ? message.annotation 
                : annotation
            )
          );
          // 편집 상태도 업데이트
          setEditingAnnotations(prev => ({
            ...prev,
            [message.annotation.id]: {
              description: message.annotation.description
            }
          }));
          break;
        case "ANNOTATIONS_LOADED":
          setAnnotations(message.annotations);
          break;
        case "ALL_ANNOTATIONS_LOADED":
          // 모든 주석 데이터 로드 (프레임 선택과 무관)
          setAnnotations(message.annotations);
          setFileTitle(message.fileTitle);
          setPageName(message.pageName);
          break;
      }
    };
  }, []);

  // 컴포넌트 마운트 시 선택된 프레임 정보 요청
  React.useEffect(() => {
    parent.postMessage({ pluginMessage: { type: "GET_SELECTED_FRAME" } }, "*");
  }, []);

  // 주석이 로드되면 첫 번째 프레임명을 기본값으로 설정
  React.useEffect(() => {
    if (annotations.length > 0 && !selectedFrameName) {
      const frameGroups = annotations.reduce((acc, annotation) => {
        if (!acc[annotation.frameName]) {
          acc[annotation.frameName] = true;
        }
        return acc;
      }, {} as Record<string, boolean>);
      
      const frameNames = Object.keys(frameGroups);
      if (frameNames.length > 0) {
        setSelectedFrameName(frameNames[0]);
      }
    }
  }, [annotations, selectedFrameName]);

  // 주석 생성 버튼 클릭 핸들러
  const handleCreateAnnotation = () => {
    if (!selectedFrame) return;
    
    const newAnnotation: Partial<Annotation> = {
      description: newAnnotationDescription || "",
    };
    
    const message: MessageToPlugin = {
      type: "CREATE_ANNOTATION",
      annotation: newAnnotation,
      settings,
    };
    
    parent.postMessage({ pluginMessage: message }, "*");
  };

  // 주석 생성 모드 토글
  const toggleCreateMode = () => {
    setIsCreatingAnnotation(!isCreatingAnnotation);
    setSelectedAnnotation(null);
    setNewAnnotationDescription("");
  };

  // 주석 선택 핸들러
  const handleSelectAnnotation = (annotation: Annotation) => {
    setSelectedAnnotation(annotation);
    setIsCreatingAnnotation(false);
  };

  // 페이지 토글 핸들러
  const togglePageExpand = () => {
    setIsPageExpanded(!isPageExpanded);
  };

  // 프레임 토글 핸들러
  const toggleFrameExpand = (frameName: string) => {
    setExpandedFrames(prev => ({
      ...prev,
      [frameName]: !prev[frameName]
    }));
  };

  // 프레임으로 뷰 이동 핸들러
  const handleScrollToFrame = (frameId: string) => {
    parent.postMessage({ 
      pluginMessage: { 
        type: "SCROLL_TO_FRAME", 
        frameId 
      } 
    }, "*");
  };

  // 주석 그룹 프레임으로 뷰 이동 핸들러
  const handleScrollToAnnotationGroup = (frameId: string) => {
    parent.postMessage({ 
      pluginMessage: { 
        type: "SCROLL_TO_ANNOTATION_GROUP", 
        frameId 
      } 
    }, "*");
  };

  // 특정 주석 아이템으로 뷰 이동 핸들러
  const handleScrollToAnnotation = (annotation: Annotation) => {
    parent.postMessage({
      pluginMessage: {
        type: "SCROLL_TO_ANNOTATION",
        annotationId: annotation.id,
        frameId: annotation.frameId,
        number: annotation.number
      }
    }, "*");
  };

  // 프레임명 선택 핸들러 추가
  const handleSelectFrameName = (frameName: string) => {
    setSelectedFrameName(frameName);
  };

  // 주석 삭제 핸들러 추가
  const handleDeleteAnnotation = (annotationId: string) => {
    if (window.confirm('이 주석을 삭제하시겠습니까? 삭제 후에는 복구할 수 없습니다.')) {
      parent.postMessage({ 
        pluginMessage: { 
          type: "DELETE_ANNOTATION", 
          id: annotationId 
        } 
      }, "*");
    }
  };

  // 주석 업데이트 핸들러 - 블러 이벤트나 저장 버튼 클릭 시 호출
  const handleUpdateAnnotation = (annotationId: string) => {
    const editedAnnotation = editingAnnotations[annotationId];
    if (!editedAnnotation) return;
    
    // 기존 주석 정보 찾기
    const originalAnnotation = annotations.find(a => a.id === annotationId);
    if (!originalAnnotation) return;
    
    // 변경사항이 있는 경우에만 업데이트 요청
    if (isAnnotationChanged(annotationId)) {
      // Figma 플러그인에 메시지를 보내 주석을 업데이트
      const message: MessageToPlugin = {
        type: "UPDATE_ANNOTATION",
        annotation: {
          ...originalAnnotation,
          description: editedAnnotation.description
        }
      };
      
      parent.postMessage({ pluginMessage: message }, "*");
      
      console.log('주석 업데이트 메시지 전송:', message);
    }
  };

  // 포커스를 잃을 때 호출되는 함수
  const handleBlur = (annotationId: string) => {
    // 포커스를 잃으면 업데이트 실행
    handleUpdateAnnotation(annotationId);
  };

  // 주석이 업데이트되었는지 확인하는 함수
  const isAnnotationChanged = (annotationId: string) => {
    const originalAnnotation = annotations.find(a => a.id === annotationId);
    const editedAnnotation = editingAnnotations[annotationId];
    
    if (!originalAnnotation || !editedAnnotation) return false;
    
    return (
      originalAnnotation.description !== editedAnnotation.description
    );
  };


  // 주석 내용 변경 핸들러
  const handleAnnotationDescriptionChange = (annotationId: string, newDescription: string) => {
    // 로컬 상태만 업데이트
    setEditingAnnotations(prev => ({
      ...prev,
      [annotationId]: {
        ...prev[annotationId],
        description: newDescription
      }
    }));
    
    // 변경 상태 업데이트
    const originalAnnotation = annotations.find(a => a.id === annotationId);
    if (originalAnnotation) {
      const isChanged = newDescription !== originalAnnotation.description;
      
      setIsAnnotationEdited(prev => ({
        ...prev,
        [annotationId]: isChanged
      }));
    }
  };

  // 주석 편집 초기화 - 주석이 변경될 때 편집 상태도 초기화
  React.useEffect(() => {
    const newEditingState: Record<string, { description: string }> = {};
    const newIsEditedState: Record<string, boolean> = {};
    
    annotations.forEach(annotation => {
      newEditingState[annotation.id] = {

        description: annotation.description
      };
      newIsEditedState[annotation.id] = false;
    });
    
    setEditingAnnotations(newEditingState);
    setIsAnnotationEdited(newIsEditedState);
  }, [annotations]);

  // 메인 UI - 프레임 선택 여부가 아닌 주석 존재 여부에 따라 표시
  return (
    <div className="flex flex-col h-screen">
      <header className="border-b p-4 flex items-center justify-between bg-background">
        <h1 className="text-xl font-semibold">{fileTitle}</h1>
        <button 
          className="p-2 rounded-md hover:bg-accent" 
          onClick={() => window.parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')}
        >
          <X size={16} />
        </button>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* 좌측 패널: 메뉴 및 기본 정보 */}
        <div className="w-1/3 border-r flex flex-col">
          <div className="p-4 flex items-center justify-between border-b">
            <div className="flex items-center gap-2">
              <button 
                className={`p-1.5 rounded-md hover:bg-accent ${!isCreatingAnnotation ? 'bg-accent' : ''}`} 
                onClick={() => setIsCreatingAnnotation(false)}
              >
                <List size={18} />
              </button>
              {selectedFrame && (
                <button 
                  className={`p-1.5 rounded-md hover:bg-accent ${isCreatingAnnotation ? 'bg-accent' : ''}`} 
                  onClick={() => setIsCreatingAnnotation(true)}
                >
                  <Square size={18} />
                </button>
              )}
            </div>
            {selectedFrame && (
              <button 
                className="p-1.5 rounded-md hover:bg-accent" 
                onClick={toggleCreateMode}
              >
                <Plus size={18} />
              </button>
            )}
          </div>
          
          <div className="p-4 flex-1">
            {/* 페이지 및 프레임 정보 */}
            <div className="mb-4">
              {annotations.length > 0 ? (
                <>
                  {/* 페이지 제목 */}
                  <div 
                    className="flex items-center gap-2 p-2 text-sm font-medium cursor-pointer mb-2"
                    onClick={togglePageExpand}
                  >
                    <div className="w-5 h-5 flex items-center justify-center text-muted-foreground">
                      {isPageExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </div>
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="13" height="13" rx="2" fill="#7B61FF" fillOpacity="0.3" stroke="#7B61FF"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">{pageName}</span>
                  </div>
                  
                  {/* 프레임별 주석 그룹화 */}
                  {isPageExpanded && (
                    <div className="ml-6">
                      {/* 프레임별로 그룹화 */}
                      {Object.entries(
                        annotations.reduce((acc, annotation) => {
                          if (!acc[annotation.frameName]) {
                            acc[annotation.frameName] = [];
                          }
                          acc[annotation.frameName].push(annotation);
                          return acc;
                        }, {} as Record<string, Annotation[]>)
                      ).map(([frameName, frameAnnotations]) => (
                        <div key={frameName} className="mb-3">
                          {/* 프레임 제목 */}
                          <div className="flex items-center gap-2 p-2 text-sm">
                            <div 
                              className="w-5 h-5 flex items-center justify-center text-muted-foreground cursor-pointer hover:text-primary"
                              onClick={() => toggleFrameExpand(frameName)}
                            >
                              {expandedFrames[frameName] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                            </div>
                            <div className="w-5 h-5 flex items-center justify-center">
                              <Focus size={14} />
                            </div>
                            <span 
                              className={`text-sm font-medium cursor-pointer hover:text-primary ${selectedFrameName === frameName ? 'text-primary' : ''}`}
                              onClick={() => {
                                // 프레임명 선택 처리
                                handleSelectFrameName(frameName);
                                // 프레임별로 그룹화된 첫 번째 주석의 frameId를 사용하여 주석 그룹 프레임으로 이동
                                if (frameAnnotations.length > 0) {
                                  handleScrollToAnnotationGroup(frameAnnotations[0].frameId);
                                }
                              }}
                            >{frameName}</span>
                            {selectedFrame && parentFrameName === frameName && (
                              <div className="w-3 h-3 rounded-full bg-accent ml-1 flex items-center justify-center">
                                <Check size={10} />
                              </div>
                            )}
                          </div>
                          
                          {/* 주석 목록 - 확장된 경우에만 표시 */}
                          {expandedFrames[frameName] && (
                            <div className="pl-7 mt-1 space-y-1">
                              {frameAnnotations.map(annotation => (
                                <div 
                                  key={annotation.id} 
                                  className="flex items-center gap-2 p-1 rounded-md hover:bg-accent/50 cursor-pointer text-sm"
                                  onClick={() => {
                                    handleSelectAnnotation(annotation);
                                    // 주석 클릭 시 해당 주석 아이템으로 이동
                                    handleScrollToAnnotation(annotation);
                                    // 해당 주석의 프레임명도 선택
                                    handleSelectFrameName(annotation.frameName);
                                  }}
                                >
                                  <div className="w-5 h-5 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-[10px] text-white font-medium">
                                      {annotation.number}
                                    </div>
                                  </div>
                                  <span className="truncate">{annotation.description}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                // 주석이 없을 때 기본 페이지 정보 표시
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <Focus size={14} />
                    </div>
                    <span className="text-sm font-medium">{pageName}</span>
                  </div>
                  
                  {selectedFrame && (
                    <div className="flex items-center gap-2 ml-4">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Focus size={14} />
                      </div>
                      <span 
                        className="text-sm font-medium cursor-pointer hover:text-primary"
                        onClick={() => {
                          if (selectedFrame) {
                            handleScrollToFrame(selectedFrame.id);
                          }
                        }}
                      >{parentFrameName || selectedFrame.name}</span>
                      <div className="w-3 h-3 rounded-full bg-accent ml-1 flex items-center justify-center">
                        <Check size={10} />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
            
            {/* 설정 컴포넌트 */}
            {isCreatingAnnotation && selectedFrame && (
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-2">Settings</h3>
                <Settings settings={settings} onChange={setSettings} />
              </div>
            )}
          </div>
        </div>
        
        {/* 우측 패널: 주석 생성/편집 */}
        <div className="flex-1 p-4 flex flex-col">
          {(() => {
            // 주석이 있을 경우 선택된 프레임의 주석만 표시
            if (annotations.length === 0) {
              // 주석이 없는 경우
              if (isCreatingAnnotation && selectedFrame) {
                // 주석 생성 모드
                return (
                  <>
                    <Editor
                      value={newAnnotationDescription}
                      onChange={setNewAnnotationDescription}
                      onBlur={() => handleBlur(newAnnotationDescription)}
                      placeholder="Tell your design"
                    />
                    
                    <div className="mt-4 flex justify-end">
                      <Button variant="primary" onClick={handleCreateAnnotation}>
                        <Plus size={16} className="mr-1" />
                        Add
                      </Button>
                    </div>
                  </>
                );
              }
              
              return (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="border border-dashed rounded-lg w-[320px] h-[180px] flex items-center justify-center text-muted-foreground">
                    <span>Frame</span>
                  </div>
                  
                  <p className="text-center text-muted-foreground mt-6">
                    Please select a frame and create your annotations
                  </p>
                  
                  <div className="w-full max-w-sm mt-4">
                    <Settings settings={settings} onChange={setSettings} />
                  </div>
                </div>
              );
            }

            // 프레임별로 그룹화된 주석 생성
            const frameGroups = annotations.reduce((acc, annotation) => {
              if (!acc[annotation.frameName]) {
                acc[annotation.frameName] = {
                  frameName: annotation.frameName,
                  frameId: annotation.frameId,
                  annotations: []
                };
              }
              acc[annotation.frameName].annotations.push(annotation);
              return acc;
            }, {} as Record<string, { frameName: string, frameId: string, annotations: Annotation[] }>);
            
            // 모든 프레임명 목록
            const frameNames = Object.keys(frameGroups);
            
            // 선택된 프레임명이 없거나 유효하지 않은 경우 첫 번째 프레임명 사용
            const currentFrameName = selectedFrameName && frameNames.includes(selectedFrameName) 
              ? selectedFrameName 
              : (frameNames.length > 0 ? frameNames[0] : null);
            
            // 현재 표시할 프레임 정보
            const currentFrame = currentFrameName ? frameGroups[currentFrameName] : null;
            
            if (currentFrame) {
              return (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium">{currentFrame.frameName}</h2>
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 rounded-md hover:bg-accent">
                        <Info size={18} className="text-muted-foreground" />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-accent">
                        <Trash size={18} className="text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                  
                  {isCreatingAnnotation && selectedFrame ? (
                    // 주석 생성 모드
                    <>
                      <Editor
                        value={newAnnotationDescription}
                        onChange={setNewAnnotationDescription}
                        onBlur={() => handleBlur(newAnnotationDescription)}
                        placeholder="Tell your design"
                      />
                      
                      <div className="mt-4 flex justify-end">
                        <Button variant="primary" onClick={handleCreateAnnotation}>
                          <Plus size={16} className="mr-1" />
                          Add
                        </Button>
                      </div>
                    </>
                  ) : (
                    // 주석 보기 모드 - 선택된 프레임의 주석만 표시 (바로 편집 가능)
                    <div className="space-y-6 overflow-y-auto">
                      {currentFrame.annotations.length > 0 ? (
                        // 뱃지 번호 순서대로 정렬하여 표시
                        [...currentFrame.annotations]
                          .sort((a, b) => a.number - b.number)
                          .map((annotation) => {
                            // 현재 편집 중인 주석 데이터 가져오기
                            const editingData = editingAnnotations[annotation.id] || {
                              description: annotation.description
                            };
                            
                            return (
                              <div key={annotation.id} className="mb-6">
                                <div className="flex items-center mb-2">
                                  <div 
                                    className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm mr-2 cursor-pointer hover:opacity-80"
                                    onClick={() => handleScrollToFrame(annotation.frameId)}
                                  >
                                    {annotation.number}
                                  </div>
                                  
                                  <button 
                                    className="p-1.5 rounded-md hover:bg-accent"
                                    onClick={() => {
                                      // 삭제 기능 추가 가능
                                      handleDeleteAnnotation(annotation.id);
                                    }}
                                  >
                                    <Trash size={16} className="text-muted-foreground" />
                                  </button>
                                </div>
                                
                                <Card>
                                  <CardContent className="p-4">
                                    <Editor
                                      value={editingData.description}
                                      onChange={(value) => handleAnnotationDescriptionChange(annotation.id, value)}
                                      onBlur={() => handleBlur(annotation.id)}
                                      placeholder="Tell your design"
                                    />
                                  </CardContent>
                                </Card>
                              </div>
                            );
                          })
                      ) : (
                        <div className="flex items-center justify-center h-64 text-muted-foreground">
                          No annotations for this frame
                        </div>
                      )}
                    </div>
                  )}
                </>
              );
            } else {
              // 유효한 프레임이 없는 경우
              return (
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  No frames with annotations
                </div>
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("react-page")).render(<App />);

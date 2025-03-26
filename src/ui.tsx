import React, { Fragment, useEffect, useRef, useState } from "react";
import * as ReactDOM from "react-dom/client";
import "./ui.css";
import { Messages, sendMessage } from "./services/messageService";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

import SidePanelComponent from "@/components/sidePanel";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Tiptap from "@/components/Tiptap";
import {
  AnnnotationCardWidth,
  AnnotationColor,
  AnnotationSize,
} from "./interfaces/enums";
import { supportedColors } from "./interfaces/const";
import { useDebouncedCallback } from "use-debounce";
import Fuse from "fuse.js";
import { Search, Delete, WandSparkles, Grip, MoveUp, Ban } from "lucide-react";

const App: React.FC = () => {
  const [fileName, setFileName] = useState("");
  const [annotationGroup, setAnnotateGroup] = useState([]);
  const [groupedByPage, setGroupByPage] = useState([]);
  const [frameImages, setFrameImages] = useState([]);
  const [currentSelectionId, setCurrentSelectionId] = useState(null);
  const [currentSelection, setCurrentSelection] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [initilaized, setInitialized] = useState(false);
  const [searchArray, setSearchArray] = useState([]);
  const searchBtnRef = useRef(null);
  const [keyword, setKeyword] = useState("");
  const [searchPanelOpen, setSearchPanelOpen] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [defaultAnnotionColor, setDefaultAnnotionColor] = useState(
    AnnotationColor.PURPLE
  );
  const [defaultAnnotionSize, setDefaultAnnotionSize] = useState(
    AnnotationSize.SMALL
  );
  const [defaultAnnotionCardWidth, setDefaultAnnotionCardWidth] = useState(
    AnnnotationCardWidth.SMALL
  );
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCoomingSoon, setShowCoomingSoon] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [showLoading, setShowLoading] = useState(false);
  let SearchKey;
  (function (SearchKey) {
    SearchKey["groupName"] = "groupName";
    SearchKey["title"] = "title";
    SearchKey["description"] = "description";
  })(SearchKey || (SearchKey = {}));
  const fuseOption = {
    keys: [SearchKey.groupName, SearchKey.title, SearchKey.description],
    includeScore: true,
    includeMatches: true,
    threshold: 0.8,
    minMatchCharLength: 1,
    findAllMatches: true,
  };
  const fuse = new Fuse(searchArray, fuseOption);
  const createNewAnnotation = () => {
    sendMessage(Messages.CREATE_ANNOTATION, {
      annotations: annotationGroup,
      groupId: currentSelectionId,
    });
  };
  const createNewAnnotationGroup = ({
    color = AnnotationColor.PURPLE,
    size = AnnotationSize.SMALL,
    cardWidth = AnnnotationCardWidth.SMALL,
  } = {}) => {
    sendMessage(Messages.CREATE_ANNOTATION_GROUP, {
      annotations: annotationGroup,
      config: {
        color,
        size,
        cardWidth,
      },
    });
  };
  const updateAnnotationGroup = (key, value) => {
    setShowLoading(true);
    sendMessage(Messages.UPDATE_ANNOTATION_GROUP, {
      pageId: currentSelection.relatedPage.id,
      groupId: currentSelectionId,
      key,
      value,
    });
  };
  const updateAnnotation = (annotationIndex, key, value) => {
    sendMessage(Messages.UPDATE_ANNOTATION, {
      pageId: currentSelection.relatedPage.id,
      groupId: currentSelectionId,
      annotationId: currentSelection.annotations[annotationIndex].id,
      key,
      value,
    });
  };
  const updateAnnotationGroupTitle = (newTitle) => {
    updateAnnotationGroup("name", newTitle);
    const currentGroupIndex = annotationGroup.findIndex(
      (_annotation) => _annotation.id === currentSelection.id
    );
    setAnnotateGroup((prevState) => {
      const newState = [...prevState];
      newState[currentGroupIndex] = Object.assign(
        Object.assign({}, newState[currentGroupIndex]),
        { name: newTitle }
      );
      return newState;
    });
  };
  const updateAnnotationTitle = (annotationIndex, newTitle) => {
    updateAnnotation(annotationIndex, "title", newTitle);
    const groupIndex = annotationGroup.findIndex(
      (_annotation) => _annotation.id === currentSelectionId
    );
    console.log(groupIndex);
    setAnnotateGroup((prevState) => {
      const newState = [...prevState];
      newState[groupIndex] = Object.assign(
        Object.assign({}, newState[groupIndex]),
        {
          annotations: newState[groupIndex].annotations.map(
            (annotation, index) => {
              if (index === annotationIndex) {
                return Object.assign(Object.assign({}, annotation), {
                  title: newTitle,
                });
              }
              return annotation;
            }
          ),
        }
      );
      return newState;
    });
  };
  const updateAnnotationDescription = (annotationIndex, newDescription) => {
    updateAnnotation(annotationIndex, "description", newDescription);
    const groupIndex = annotationGroup.findIndex(
      (_annotation) => _annotation.id === currentSelectionId
    );
    setAnnotateGroup((prevState) => {
      const newState = [...prevState];
      newState[groupIndex] = Object.assign(
        Object.assign({}, newState[groupIndex]),
        {
          annotations: newState[groupIndex].annotations.map(
            (annotation, index) => {
              if (index === annotationIndex) {
                return Object.assign(Object.assign({}, annotation), {
                  description: newDescription,
                });
              }
              return annotation;
            }
          ),
        }
      );
      return newState;
    });
  };
  const updateAnnotationColor = (color) => {
    updateAnnotationGroup("color", color);
    const currentGroupIndex = annotationGroup.findIndex(
      (_annotation) => _annotation.id === currentSelectionId
    );
    setAnnotateGroup((prevState) => {
      const newState = [...prevState];
      newState[currentGroupIndex] = Object.assign(
        Object.assign({}, newState[currentGroupIndex]),
        { color: color }
      );
      return newState;
    });
  };
  const updateAnnotationSize = (size) => {
    updateAnnotationGroup("size", size);
    const currentGroupIndex = annotationGroup.findIndex(
      (_annotation) => _annotation.id === currentSelectionId
    );
    setAnnotateGroup((prevState) => {
      const newState = [...prevState];
      newState[currentGroupIndex] = Object.assign(
        Object.assign({}, newState[currentGroupIndex]),
        { size: size }
      );
      return newState;
    });
  };
  const updateAnnotationCardWidth = (cardWidth) => {
    updateAnnotationGroup("cardWidth", cardWidth);
    const currentGroupIndex = annotationGroup.findIndex(
      (_annotation) => _annotation.id === currentSelectionId
    );
    setAnnotateGroup((prevState) => {
      const newState = [...prevState];
      newState[currentGroupIndex] = Object.assign(
        Object.assign({}, newState[currentGroupIndex]),
        { cardWidth: cardWidth }
      );
      return newState;
    });
  };
  const groupByPage = (annotationGroups) => {
    const _groupedByPage = {};
    annotationGroups.forEach((group) => {
      var _a, _b;
      const pageId = group.relatedPage.id;
      if (!_groupedByPage[pageId]) {
        _groupedByPage[pageId] = {
          pageId: pageId,
          pageName:
            (_b =
              (_a = groupedByPage.find((page) => page.pageId === pageId)) ===
                null || _a === void 0
                ? void 0
                : _a.pageName) !== null && _b !== void 0
              ? _b
              : "",
          annotationGroups: [],
        };
      }
      _groupedByPage[pageId].annotationGroups.push(group);
    });
    return Object.values(_groupedByPage);
  };
  const extractTextFromNode = (node) => {
    let texts = [];
    if (node.type === "text" && node.text) {
      texts.push(node.text);
    }
    if (node.content && Array.isArray(node.content)) {
      node.content.forEach((childNode) => {
        texts = texts.concat(extractTextFromNode(childNode));
      });
    }
    return texts;
  };
  const toSearchArray = (annotationGroups) => {
    const searchArray = [];
    annotationGroups.forEach((group) => {
      group.annotations.forEach((annotation, index) => {
        searchArray.push({
          groupId: group.id,
          groupName: group.name,
          index: index,
          id: annotation.id,
          title: annotation.title.trim(),
          description: extractTextFromNode(annotation.description)
            .join(" ")
            .trim(),
        });
      });
    });
    return searchArray;
  };
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    if (result.source.index === result.destination.index) return;
    const items = Array.from(currentSelection.annotations);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    const currentGroupIndex = annotationGroup.findIndex(
      (_annotation) => _annotation.id === currentSelection.id
    );
    setAnnotateGroup((prevState) => {
      const newState = [...prevState];
      newState[currentGroupIndex] = Object.assign(
        Object.assign({}, newState[currentGroupIndex]),
        { annotations: items }
      );
      return newState;
    });
    sendMessage(Messages.UPDATE_ANNOTATION_ORDER, {
      pageId: currentSelection.relatedPage.id,
      groupId: currentSelection.id,
      sourceIndex: result.source.index + 1,
      destinationIndex: result.destination.index + 1,
    });
  };
  useEffect(() => {
    console.log("load data");
    sendMessage(Messages.LOAD_DATA, { key: "annotationGroup" });
    sendMessage(Messages.GET_FILE_NAME);
  }, []);
  useEffect(() => {
    console.log(annotationGroup);
    if (!initilaized) {
      setInitialized(true);
      return;
    }
    if (annotationGroup.length && currentSelectionId === null) {
      setCurrentSelectionId(annotationGroup[0].id);
    }
    setGroupByPage(groupByPage(annotationGroup));
    setSearchArray(toSearchArray(annotationGroup));
    sendMessage(Messages.SAVE_DATA, {
      key: "annotationGroup",
      data: annotationGroup,
    });
  }, [annotationGroup]);
  useEffect(() => {
    if (groupedByPage.length === 0) return;
    groupedByPage.forEach((page) => {
      if (page.pageName === "") {
        sendMessage(Messages.GET_PAGE_NAME, { pageId: page.pageId });
      }
    });
  }, [groupedByPage]);
  useEffect(() => {
    console.log("searchArray", searchArray);
  }, [searchArray]);
  useEffect(() => {
    const currentSelection = annotationGroup.find(
      (group) => group.id === currentSelectionId
    );
    setCurrentSelection(currentSelection);
  }, [currentSelectionId, annotationGroup]);
  useEffect(() => {
    console.log("currentSelection", currentSelection);
  }, [currentSelection]);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (searchResult.length === 0) return;
      if (event.key === "ArrowDown") {
        setFocusedIndex((prevIndex) => (prevIndex + 1) % searchResult.length);
      } else if (event.key === "ArrowUp") {
        setFocusedIndex(
          (prevIndex) =>
            (prevIndex - 1 + searchResult.length) % searchResult.length
        );
      } else if (event.key === "Enter" && focusedIndex !== -1) {
        const annotation = searchResult[focusedIndex].item;
        setCurrentSelectionId(annotation.groupId);
        setKeyword("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchResult, focusedIndex, setCurrentSelectionId, setKeyword]);
  useEffect(() => {
    window.onmessage = (event) => {
      var _a;
      const { type, message } = event.data.pluginMessage;
      if (message === undefined) return;
      const { result } = message;
      switch (type) {
        case Messages.CREATE_ANNOTATION_GROUP:
          if (result) {
            setAnnotateGroup(message.annotations);
            setCurrentSelectionId(message.updatedGroup);
          } else {
            setErrorMessage(message.errorMessage);
            console.error(message.errorMessage);
          }
          break;
        case Messages.CREATE_ANNOTATION:
          if (result) {
            setAnnotateGroup(message.annotations);
          } else {
            setErrorMessage(message.errorMessage);
            console.error(message.errorMessage);
          }
          break;
        case Messages.UPDATE_ANNOTATION:
          if (result) {
            console.log("update annotation success");
          } else {
            console.error(message.errorMessage);
          }
          break;
        case Messages.DELETE_ANNOTATION:
          if (result) {
            console.log("delete annotation success");
          } else {
            console.error(message.errorMessage);
          }
        case Messages.SAVE_DATA:
          if (result) {
            console.log("save data success");
          } else {
            console.error(message.errorMessage);
          }
          break;
        case Messages.LOAD_DATA:
          if (result) {
            if (message.key === "annotationGroup") {
              console.log("load data success");
              setAnnotateGroup(
                (_a = message.data) !== null && _a !== void 0 ? _a : []
              );
            }
          }
          break;
        case Messages.CLEAR_ANNOTATION_DATA:
          setAnnotateGroup([]);
          break;
        case Messages.GET_FILE_NAME:
          setFileName(message.fileName);
          break;
        case Messages.GET_PAGE_NAME:
          console.log("GET_PAGE_NAME", message);
          setGroupByPage((prev) => {
            return prev.map((page) => {
              if (page.pageId === message.pageId) {
                return Object.assign(Object.assign({}, page), {
                  pageName: message.pageName,
                });
              }
              return page;
            });
          });
          break;
        case Messages.UPDATE_ANNOTATION_ORDER:
          if (result) {
            console.log("update annotation order success");
          } else {
            console.error(message.errorMessage);
          }
          break;
        case Messages.SELECTION_CHANGE:
          let selection = message.selection;
          console.log("figma selection chagend!!");
          console.log(selection);
          if (selection) {
            setCurrentSelectionId(selection);
          }
          break;
        case Messages.CHECK_CURRENT_SELECTION:
          console.log("CHECK_CURRENT_SELECTION", message);
          if (!result) return;
          setAnnotateGroup((prevState) => {
            const { groupId: checkedGroupId } = message;
            return prevState.map((group) => {
              if (group.id === checkedGroupId) {
                return Object.assign(Object.assign({}, group), {
                  obsolete: message.obsolete,
                });
              }
              return group;
            });
          });
          break;
        case Messages.UPDATE_ANNOTATION_GROUP:
          setShowLoading(false);
          break;
        default:
          break;
      }
    };
  }, []);
  function deleteAnnoation(index, annotation) {
    sendMessage(Messages.DELETE_ANNOTATION, {
      pageId: currentSelection.relatedPage.id,
      groupId: currentSelection.id,
      annotation: annotation,
    });
    const currentGroupIndex = annotationGroup.findIndex(
      (_annotation) => _annotation.id === currentSelection.id
    );
    setAnnotateGroup((prevState) => {
      var _a;
      const newState = [...prevState];
      (_a = newState[currentGroupIndex]) === null || _a === void 0
        ? void 0
        : _a.annotations.splice(index, 1);
      return newState;
    });
  }
  function deleteAnnotationGroup() {
    sendMessage(Messages.DELETE_ANNOTATION_GROUP, {
      pageId: currentSelection.relatedPage.id,
      group: currentSelection,
    });
    setShowDeleteModal(false);
    const currentGroupIndex = annotationGroup.findIndex(
      (_annotation) => _annotation.id === currentSelection.id
    );
    setCurrentSelectionId(null);
    setAnnotateGroup((prevState) => {
      const newState = [...prevState];
      newState.splice(currentGroupIndex, 1);
      return newState;
    });
  }
  useEffect(() => {
    if (keyword === "") {
      if (searchPanelOpen) {
        setSearchPanelOpen(false);
      }
    } else {
      if (!searchPanelOpen) {
        setSearchPanelOpen(true);
      }
      const matchingAnnotations = fuse.search(keyword);
      setSearchResult(matchingAnnotations);
      console.log(matchingAnnotations);
    }
  }, [keyword]);
  const onUpdate = ({ editor, index }) => {
    const jsonContent = editor.getJSON();
    console.log("Editor content updated:", jsonContent);
    debounced("description", index, jsonContent);
  };
  const debounced = useDebouncedCallback((type, index, value) => {
    console.log(currentSelectionId);
    switch (type) {
      case "groupTitle":
        updateAnnotationGroupTitle(value);
        break;
      case "title":
        updateAnnotationTitle(index, value);
        break;
      case "description":
        updateAnnotationDescription(index, value);
        break;
      default:
        break;
    }
  }, 500);
  const moveToSelection = (id = currentSelectionId) => {
    sendMessage(Messages.MOVE_TO_SELECTION, {
      annotations: annotationGroup,
      groupId: id,
    });
  };
  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };
  const highlightKeyword = (text, keyword) => {
    if (text === undefined) return;
    const escapedKeyword = escapeRegExp(keyword);
    const parts = text.split(new RegExp(`(${escapedKeyword})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase()
        ? React.createElement(
            "span",
            { key: index, className: "text-primary" },
            part
          )
        : part
    );
  };
  const getFrameImages = () => {
    if (frameImages.length === 0) {
      sendMessage(Messages.GET_FRAME_IMAGE, { annotations: annotationGroup });
    }
  };
  const handleGroupSelect = (groupId) => {
    sendMessage(Messages.CHECK_CURRENT_SELECTION, {
      groupId: currentSelection.id,
    });
    setCurrentSelectionId(groupId);
  };

  return (
    <div className="flex flex-row w-full min-h-full max-h-full">
      <SidePanelComponent
        fileName={fileName}
        annotationGroup={groupedByPage}
        currentSelectionId={currentSelectionId}
        setCurrentSelectionId={handleGroupSelect}
        createNewAnnotationGroup={createNewAnnotationGroup}
        moveToSelection={moveToSelection}
        frameImages={frameImages}
        hanldeGridMode={getFrameImages}
      />
      <div className="right-panel flex flex-col flex-1 max-h-full bg-[#F9F9F9]">
        {annotationGroup.length === 0 ? (
          <div className="flex flex-col flex-1 justify-start items-center mt-10">
            <span className="mt-3 font-bold text-[11px] text-grey-09">
              Please select 1 frame and create your annotations
            </span>
            <div className="flex flex-row gap-1 mt-10">
              <Button
                className="flex flex-row gap-1 items-center border rounded-2xl px-2.5 py-1 hover:bg-grey-00"
                onClick={() =>
                  setDefaultAnnotionColor(
                    defaultAnnotionColor >= 0
                      ? (defaultAnnotionColor + 1) % 3
                      : 0
                  )
                }
              >
                <span className="font-bold text-[10px] text-grey-07">
                  Color
                </span>
                <span
                  className={`ml-0.5 rounded-lg w-[13px] h-[13px] ${supportedColors[defaultAnnotionColor]}`}
                ></span>
              </Button>
              <Button
                className="flex flex-row gap-1 items-center border rounded-2xl px-2.5 py-1 hover:bg-grey-00"
                onClick={() =>
                  setDefaultAnnotionSize(
                    defaultAnnotionSize >= 0 ? (defaultAnnotionSize + 1) % 3 : 0
                  )
                }
              >
                <span className="font-bold text-[10px] text-grey-07">
                  Font size
                </span>
                <span className="text-[10px] text-grey-08">
                  {defaultAnnotionSize === 0
                    ? "small"
                    : defaultAnnotionSize === 1
                      ? "medium"
                      : "large"}
                </span>
              </Button>
              <Button
                className="flex flex-row gap-1 items-center border rounded-2xl px-2.5 py-1 hover:bg-grey-00"
                onClick={() =>
                  setDefaultAnnotionCardWidth(
                    defaultAnnotionCardWidth >= 0
                      ? (defaultAnnotionCardWidth + 1) % 3
                      : 0
                  )
                }
              >
                <span className="font-bold text-[10px] text-grey-07">
                  Card width
                </span>
                <span className="text-[10px] text-grey-08">
                  {defaultAnnotionCardWidth === 0
                    ? "small"
                    : defaultAnnotionCardWidth === 1
                      ? "medium"
                      : "large"}
                </span>
              </Button>
            </div>
            <Button
              className="bg-primary text-black px-6 py-2 rounded-[4px] text-[12px] font-bold mt-6 hover:bg-primary/90"
              onClick={() =>
                createNewAnnotationGroup({
                  color: defaultAnnotionColor,
                  size: defaultAnnotionSize,
                  cardWidth: defaultAnnotionCardWidth,
                })
              }
            >
              Create an Annotation
            </Button>
          </div>
        ) : (
          <>
            <div className="flex flex-row px-4 border-b w-full h-10">
              <div className="flex flex-row flex-1">
                <Popover>
                  <PopoverTrigger ref={searchBtnRef} className="outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </PopoverTrigger>
                  <PopoverContent
                    className="flex flex-col bg-white w-[300px] ml-6 rounded-md border mb-10"
                    align="start"
                    side="bottom"
                  >
                    {searchResult.length === 0 && (
                      <div className="px-2 py-2 text-[10px] text-grey-06">
                        No matching annotations found
                      </div>
                    )}
                    {searchResult.map(
                      ({ item: annotation, matches }, index) => {
                        const firstMatch = matches[0];
                        const descriptionMatches = matches.filter((match) =>
                          match.key.includes("description")
                        );
                        const firstDescriptionMatch =
                          descriptionMatches.length > 0
                            ? descriptionMatches[0]
                            : null;
                        const isTitleOnlyMatch =
                          matches.length === 1 &&
                          firstMatch.key.includes("title");
                        const isFocused = focusedIndex === index;
                        return (
                          <div
                            className={`hover:bg-black/[3%] px-2 py-2 ${
                              isFocused ? "bg-black/[3%]" : ""
                            }`}
                            key={annotation.id}
                            onClick={() => {
                              setCurrentSelectionId(annotation.groupId);
                              setKeyword("");
                            }}
                          >
                            <div className="flex flex-row gap-1">
                              <div>
                                <MoveUp />
                              </div>
                              <div className="flex flex-col items-start gap-1">
                                <div className="flex flex-row text-[10px]">
                                  <span className="font-bold text-grey-06">
                                    <span className="font-bold text-grey-09">
                                      {highlightKeyword(
                                        annotation.groupName,
                                        keyword
                                      )}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex flex-col items-start gap-1 text-[8px]">
                                  <div className="text-grey-06">
                                    {highlightKeyword(
                                      `#${annotation.index + 1} ${annotation.title}`,
                                      keyword
                                    )}
                                  </div>
                                  {isTitleOnlyMatch ? (
                                    <div className="text-[8px] text-grey-06">
                                      {highlightKeyword(
                                        annotation.description,
                                        keyword
                                      )}
                                    </div>
                                  ) : (
                                    <div className="text-[8px] text-grey-06">
                                      {firstDescriptionMatch
                                        ? highlightKeyword(
                                            firstDescriptionMatch.value,
                                            keyword
                                          )
                                        : highlightKeyword(
                                            firstMatch.value,
                                            keyword
                                          )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger
                    className="p-2"
                    onMouseEnter={() => setShowCoomingSoon(true)}
                    onMouseLeave={() => setShowCoomingSoon(false)}
                  >
                    <WandSparkles />
                  </PopoverTrigger>
                  <PopoverContent
                    className="bg-grey-10 px-2 py-1 rounded-sm popover-panel-with-arrow text-[10px] text-white overflow-visible"
                    align="start"
                    side="left"
                  >
                    Cooming Soon!
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            {annotationGroup.length > 0 && (
              <div className="box-border flex flex-col flex-1 overflow-hidden">
                {currentSelection && currentSelection.obsolete && (
                  <div className="flex flex-row items-center bg-[#FF5D5D]/[8%] px-3 py-2 h-10">
                    <div className="flex flex-row flex-1 items-center gap-3">
                      <Ban />
                      <span className="text-[10px] text-grey-07 text-left">
                        This group annotation is no longer on your canvas.
                        <br />
                        Would you like to delete it here too?
                      </span>
                    </div>
                    <Button
                      className="inline-flex justify-center items-center bg-subRed-01 px-4 py-1 rounded-[4px] text-[10px] text-white"
                      onClick={() => deleteAnnotationGroup()}
                    >
                      Delete
                    </Button>
                  </div>
                )}
                <div className="relative flex flex-col justify-between items-center gap-1 py-1 border-b">
                  {currentSelection && currentSelection.obsolete && (
                    <div className="top-0 left-0 z-10 absolute bg-white/[63%] w-full h-full"></div>
                  )}
                  <div className="flex flex-row items-center gap-1 px-4 py-2 w-full">
                    <Input
                      key={currentSelection ? currentSelection.id : 0}
                      defaultValue={
                        currentSelection ? currentSelection.name : ""
                      }
                      onChange={(e) =>
                        debounced("groupTitle", 0, e.target.value)
                      }
                      className="box-content flex-1 border-white hover:border-grey-04 focus:border-primary px-[6px] border rounded-md min-h-6 font-bold text-[12px] text-grey-09 outline-none"
                    />
                    <div className="mx-2 border-r h-4"></div>
                    <Button
                      className="inline-flex justify-center items-center data-[hover]:bg-grey-00 rounded-md w-7 h-7"
                      onClick={() => moveToSelection()}
                    >
                      <Search />
                    </Button>
                    <Button
                      className="inline-flex justify-center items-center data-[hover]:bg-grey-00 rounded-md w-7 h-7 text-grey-08"
                      onClick={() => setShowDeleteModal(true)}
                    >
                      <Delete />
                    </Button>
                  </div>
                  <div className="flex flex-row justify-between items-center gap-2 mb-2 px-4 w-full">
                    <div className="flex flex-row gap-1">
                      <Button
                        className="flex flex-row gap-1 items-center border rounded-2xl px-2.5 py-1 hover:bg-grey-00"
                        onClick={() =>
                          updateAnnotationColor(
                            currentSelection.color >= 0
                              ? (currentSelection.color + 1) % 3
                              : 0
                          )
                        }
                      >
                        <span className="font-bold text-[10px] text-grey-07">
                          Color
                        </span>
                        <span
                          className={`ml-0.5 rounded-lg w-[13px] h-[13px] ${supportedColors[currentSelection?.color]}`}
                        ></span>
                      </Button>
                      <Button
                        className="flex flex-row gap-1 items-center border rounded-2xl px-2.5 py-1 hover:bg-grey-00"
                        onClick={() =>
                          updateAnnotationSize(
                            currentSelection.size >= 0
                              ? (currentSelection.size + 1) % 3
                              : 0
                          )
                        }
                      >
                        <span className="font-bold text-[10px] text-grey-07">
                          Font size
                        </span>
                        <span className="text-[10px] text-grey-08">
                          {currentSelection?.size === 0
                            ? "small"
                            : currentSelection?.size === 1
                              ? "medium"
                              : "large"}
                        </span>
                      </Button>
                      <Button
                        className="flex flex-row gap-1 items-center border rounded-2xl px-2.5 py-1 hover:bg-grey-00"
                        onClick={() =>
                          updateAnnotationCardWidth(
                            currentSelection.cardWidth >= 0
                              ? (currentSelection.cardWidth + 1) % 3
                              : 0
                          )
                        }
                      >
                        <span className="font-bold text-[10px] text-grey-07">
                          Card width
                        </span>
                        <span className="text-[10px] text-grey-08">
                          {currentSelection?.cardWidth === 0
                            ? "small"
                            : currentSelection?.cardWidth === 1
                              ? "medium"
                              : "large"}
                        </span>
                      </Button>
                    </div>
                    <Button
                      className="inline-flex justify-center items-center bg-primary data-[hover]:bg-primary/50 px-3 py-1 rounded-md text-white"
                      onClick={() => createNewAnnotationGroup()}
                    >
                      <div className="flex flex-row items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        <div className="text-[10px]">Add</div>
                      </div>
                    </Button>
                  </div>
                  <div className="bg-gradient-to-r from-primary to-[#CDB4FF] to-[50%] rounded-sm w-full h-1 overflow-hidden">
                    <div className="left-right bg-primary w-full h-full progress"></div>
                  </div>
                  <DragDropContext onDragEnd={handleOnDragEnd}>
                    <div className="flex flex-col pb-20 overflow-y-scroll">
                      <Droppable droppableId="annotations">
                        {(provided) => (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {currentSelection?.annotations.map(
                              (annotation, index) => (
                                <Draggable
                                  key={annotation.id}
                                  draggableId={annotation.id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      className="my-4 px-[10px]"
                                    >
                                      <div className="flex flex-row items-start gap-2 w-full">
                                        <div className="relative flex flex-row items-center gap-2 h-[34px]">
                                          {currentSelection?.obsolete && (
                                            <div className="absolute bg-white/[63%] w-full h-full"></div>
                                          )}
                                          <div
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            className="flex flex-col justify-center hover:bg-grey-00 px-1.5 rounded-sm h-[22px] cursor-pointer"
                                          >
                                            <Grip />
                                          </div>
                                          <span
                                            className={`flex flex-row justify-center items-center ${supportedColors[currentSelection?.color]} rounded-xl w-5 h-5 text-[10px] text-white`}
                                          >
                                            {`${index + 1}`}
                                          </span>
                                        </div>
                                        <div className="relative flex flex-col flex-1 gap-2">
                                          {currentSelection?.obsolete && (
                                            <div className="z-10 absolute bg-white/[63%] w-full h-full"></div>
                                          )}
                                          <Input
                                            key={`${annotation.id}`}
                                            type="text"
                                            placeholder="Title"
                                            className="px-2 border rounded-md w-full h-[34px] outline-none"
                                            defaultValue={annotation.title}
                                            disabled={
                                              currentSelection?.obsolete
                                            }
                                            onChange={(e) =>
                                              debounced(
                                                "title",
                                                index,
                                                e.target.value
                                              )
                                            }
                                          />
                                          <Tiptap
                                            key={`${annotation.id}-desc`}
                                            id={annotation.id}
                                            content={annotation.description}
                                            onUpdate={onUpdate}
                                            index={index}
                                          />
                                        </div>
                                        <div className="relative flex flex-row items-center gap-2 h-[34px]">
                                          {currentSelection?.obsolete && (
                                            <div className="z-10 absolute bg-white/[63%] w-full h-full"></div>
                                          )}
                                          <Button
                                            className="inline-flex justify-center items-center data-[hover]:bg-grey-03 rounded-md w-7 h-7"
                                            onClick={() =>
                                              deleteAnnoation(index, annotation)
                                            }
                                          >
                                            <Delete />
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </Draggable>
                              )
                            )}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </div>
                  </DragDropContext>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {showDeleteModal && (
        <div className="absolute flex flex-row justify-center items-center w-full h-full">
          <div className="flex flex-col justify-center items-center border-white bg-white bg-opacity-20 shadow-lg backdrop-blur-md border rounded-lg w-[286px] h-[198px]">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 5.375V6.5H4.625C4.00368 6.5 3.5 7.00368 3.5 7.625C3.5 8.24632 4.00368 8.75 4.625 8.75H5.075L6.29739 20.9739C6.41241 22.1241 7.38028 23 8.53622 23H16.4638C17.6197 23 18.5876 22.1241 18.7026 20.9739L19.925 8.75H20.375C20.9963 8.75 21.5 8.24632 21.5 7.625C21.5 7.00368 20.9963 6.5 20.375 6.5H17V5.375C17 3.51104 15.489 2 13.625 2H11.375C9.51104 2 8 3.51104 8 5.375ZM11.375 4.25C10.7537 4.25 10.25 4.75368 10.25 5.375V6.5H14.75V5.375C14.75 4.75368 14.2463 4.25 13.625 4.25H11.375ZM9.57566 9.5014C10.1962 9.47038 10.7244 9.94828 10.7554 10.5688L11.1679 18.8188C11.199 19.4394 10.7211 19.9676 10.1005 19.9986C9.47997 20.0296 8.95177 19.5517 8.92074 18.9312L8.50824 10.6812C8.47721 10.0606 8.95511 9.53243 9.57566 9.5014ZM15.4255 9.5014C16.0461 9.53243 16.524 10.0606 16.4929 10.6812L16.0804 18.9312C16.0494 19.5517 15.5212 20.0296 14.9007 19.9986C14.2801 19.9676 13.8022 19.4394 13.8332 18.8188L14.2457 10.5688C14.2768 9.94828 14.805 9.47038 15.4255 9.5014Z"
                fill="#1B1B1B"
              />
            </svg>
            <div className="flex flex-col gap-1 mt-6">
              <p className="text-xs">
                Deleted content{" "}
                <span className="underline">cannot be restored.</span>
              </p>
              <p className="font-bold text-xs">
                Are you sure you want to delete it?
              </p>
            </div>
            <div className="flex flex-row gap-2 mt-6">
              <Button
                className="w-20 px-6 py-2 font-bold"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </Button>
              <Button
                className="w-20 bg-subRed-01 text-white px-6 py-2 font-bold rounded-md"
                onClick={() => deleteAnnotationGroup()}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("react-page")).render(<App />);

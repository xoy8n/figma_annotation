import React, { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Search, CornerDownRight } from "lucide-react";

interface SearchResult {
  item: {
    id: string;
    groupId: string;
    groupName: string;
    index: number;
    description?: any;
  };
  matches: Array<{
    key: string;
    value: string;
  }>;
}

interface SearchPopoverProps {
  keyword: string;
  setKeyword: (value: string) => void;
  searchResult: SearchResult[];
  setCurrentSelectionId: (id: string) => void;
  highlightKeyword: (text: string, keyword: string) => React.ReactNode;
}

const SearchPopover: React.FC<SearchPopoverProps> = ({
  keyword,
  setKeyword,
  searchResult,
  setCurrentSelectionId,
  highlightKeyword,
}) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  // 검색 결과에서 키보드로 이동할 수 있도록 처리
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!keyword) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((prev) =>
          prev < searchResult.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === "Enter" && focusedIndex >= 0) {
        e.preventDefault();
        if (searchResult[focusedIndex]) {
          setCurrentSelectionId(searchResult[focusedIndex].item.groupId);
          setKeyword("");
        }
      } else if (e.key === "Escape") {
        setKeyword("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [keyword, searchResult, focusedIndex, setCurrentSelectionId, setKeyword]);

  // 검색 결과 목록이 변경될 때 포커스 인덱스 초기화
  useEffect(() => {
    setFocusedIndex(-1);
  }, [searchResult]);

  // 컴포넌트가 마운트되면 입력 필드에 포커스
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="relative w-full">
      <div className="flex items-center">
        <Search className="absolute left-4" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="검색어를 입력하세요."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="h-8 text-[12px] pl-10"
          autoFocus
        />
      </div>
      {keyword && (
        <div className="absolute z-50 flex flex-col bg-white w-full rounded-md border shadow-lg mt-1">
          {searchResult.length === 0 && (
            <div className="px-2 py-2 text-[10px] text-grey-06">
              검색 결과가 없습니다
            </div>
          )}
          {searchResult.map(({ item: annotation, matches }, index) => {
            const firstMatch = matches[0];
            const descriptionMatches = matches.filter((match) =>
              match.key.includes("description")
            );
            const firstDescriptionMatch =
              descriptionMatches.length > 0 ? descriptionMatches[0] : null;
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
                    <CornerDownRight />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <div className="flex flex-row text-[10px]">
                      <span className="font-bold text-grey-06">
                        <span className="font-bold text-grey-09">
                          {highlightKeyword(annotation.groupName, keyword)}
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-col items-start gap-1 text-[8px]">
                      <div className="text-grey-06">
                        {highlightKeyword(`#${annotation.index + 1}`, keyword)}
                      </div>
                      <div className="text-[8px] text-grey-06">
                        {firstDescriptionMatch
                          ? highlightKeyword(
                              firstDescriptionMatch.value,
                              keyword
                            )
                          : highlightKeyword(firstMatch.value, keyword)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchPopover;

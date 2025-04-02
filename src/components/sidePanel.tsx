import { Button } from "../components/ui/button";
import {
  List,
  Plus,
  Square,
  StickyNote,
  Folder,
  CornerDownRight,
  Search,
  Focus,
} from "lucide-react";
import React, { useEffect, useState } from "react";

export default function SidePanelComponent({
  fileName,
  annotationGroup,
  currentSelectionId,
  setCurrentSelectionId,
  createNewAnnotationGroup,
  moveToSelection,
}) {
  const [viewMode, setViewMode] = useState(0);
  const [openStatus, setOpenStatus] = useState({});

  useEffect(() => {
    console.log(annotationGroup);
    const status = { ...openStatus };
    annotationGroup.forEach((page) => {
      if (status[page.pageId] === undefined) {
        status[page.pageId] = false;
      }
      if (
        page.annotationGroups.find((annote) => annote.id === currentSelectionId)
      ) {
        status[page.pageId] = true;
      }
    });
    setOpenStatus(status);
  }, [annotationGroup, currentSelectionId]);

  const toggleOpen = (pageId) => {
    setOpenStatus((prevStatus) => ({
      ...prevStatus,
      [pageId]: !prevStatus[pageId],
    }));
  };

  useEffect(() => {
    console.log(openStatus);
  }, [openStatus]);

  return (
    <div className="left-panel flex flex-col bg-[#F9F9F9] border-r w-44 min-h-full max-h-full">
      <div className="flex flex-row justify-between items-center px-2 py-3 border-b w-full">
        <div className="flex flex-row flex-1 items-center">
          <Folder />
          <p className="ml-2 font-bold text-grey-09">{fileName}</p>
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-scroll w-40">
          {annotationGroup.map((page) => (
            <details
              key={page.pageId}
              className="group"
              open={openStatus[page.pageId]}
            >
              <summary
                className="flex justify-between items-center p-2 border-b font-medium cursor-pointer list-none"
                onClick={(e) => {
                  e.preventDefault();
                  toggleOpen(page.pageId);
                }}
              >
                <div className="flex flex-row items-center">
                  <StickyNote />
                  <p className="ml-2 font-bold text-grey-09">{page.pageName}</p>
                </div>
                <span className="group-open:rotate-180 hover:bg-black/[2%] p-1 transition">
                  <svg
                    fill="none"
                    height="14"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    width="14"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              {page.annotationGroups.map((annote) => (
                <div
                  key={annote.id}
                  className="border-b group-open:animate-fadeIn"
                >
                  {viewMode === 0 ? (
                    <div
                      className={`flex flex-row items-center p-2 w-full ${
                        currentSelectionId === annote.id ? "bg-black/[2%]" : ""
                      }`}
                    >
                      <button
                        onClick={() => setCurrentSelectionId(annote.id)}
                        className={`${
                          currentSelectionId === annote.id
                            ? "text-primary "
                            : "text-grey-06"
                        } flex-grow text-left flex flex-row gap-1 font-bold mr-2 items-center overflow-hidden`}
                      >
                        <CornerDownRight />
                        <span className="flex-1 text-[11px] text-ellipsis whitespace-nowrap overflow-hidden">
                          {annote.name}
                        </span>
                      </button>
                      <Button
                        onClick={() => moveToSelection(annote.id)}
                        className="flex flex-shrink-0 justify-center items-center hover:bg-black/[3%] p-1 hover:rounded-sm w-6 h-6"
                      >
                        <Focus />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex pt-4">
                      <Button
                        onClick={() => setCurrentSelectionId(annote.id)}
                        className="flex flex-col w-full items-center px-2"
                      >
                        <img
                          src={`data:image/svg+xml;base64,${btoa(annote.img)}`}
                          alt="img"
                          className="bg-[#E5E5E5] rounded-[4px] w-[140px] h-[78.75px] object-contain"
                          style={{
                            outline:
                              currentSelectionId === annote.id
                                ? "4px solid #5620C0"
                                : "1px solid #C9C9C9",
                          }}
                        />
                        <div className="flex flex-row justify-between items-center px-2 py-1 w-full">
                          <span
                            className={`flex-grow text-[9px] text-ellipsis whitespace-nowrap overflow-hidden text-left ${
                              currentSelectionId === annote.id
                                ? "text-primary "
                                : "text-grey-06"
                            }`}
                          >
                            {annote.name}
                          </span>
                          <div
                            onClick={() => moveToSelection(annote.id)}
                            className="flex flex-shrink-0 justify-center items-center hover:bg-black/[3%] p-1 hover:rounded-sm w-6 h-6 cursor-pointer"
                          >
                            <Search />
                          </div>
                        </div>
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

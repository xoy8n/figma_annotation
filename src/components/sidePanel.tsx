import { Button } from "../components/ui/button";
import { List, Plus, Square, Frame, MoveUp, Search } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function SidePanelComponent({
  fileName,
  annotationGroup,
  currentSelectionId,
  setCurrentSelectionId,
  createNewAnnotationGroup,
  moveToSelection,
  frameImages,
  hanldeGridMode,
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

  const setMode = (mode) => {
    if (mode === 1) {
      hanldeGridMode();
    }
    setViewMode(mode);
  };

  useEffect(() => {
    console.log(openStatus);
  }, [openStatus]);

  return (
    <div className="left-panel flex flex-col bg-[#F9F9F9] border-r w-44 min-h-full max-h-full">
      <div className="flex flex-row justify-between items-center bg-white px-2 border-b w-full h-10">
        <div className="flex flex-row flex-1">
          <Frame />
          <p className="ml-1 font-bold text-grey-09">{fileName}</p>
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex flex-row justify-between px-2 py-2 border-b w-full">
          <div className="flex flex-row gap-1">
            <Button
              className={`w-6 h-6 flex flex-row justify-center items-center border-primary rounded-md ${
                viewMode === 0
                  ? "bg-primary/10  hover:bg-none"
                  : "hover:bg-black/[2%] "
              }`}
              onClick={() => setMode(0)}
            >
              <List />
            </Button>
            <Button
              className={`w-6 h-6 flex flex-row justify-center items-center border-primary rounded-md ${
                viewMode === 1
                  ? "bg-primary/10   hover:bg-none"
                  : "hover:bg-black/[2%] "
              }`}
              onClick={() => setMode(1)}
            >
              <Square />
            </Button>
          </div>
          <Button
            className="p-1 hover:bg-black/[2%]"
            onClick={createNewAnnotationGroup}
          >
            <Plus />
          </Button>
        </div>
        <div className="flex-1 overflow-y-scroll">
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
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.75 4.66663H9.45C10.4301 4.66663 10.9201 4.66663 11.2945 4.85736C11.6238 5.02514 11.8915 5.29286 12.0593 5.62214C12.25 5.99649 12.25 6.48653 12.25 7.46663V8.28329C12.25 9.26338 12.25 9.75343 12.0593 10.1278C11.8915 10.4571 11.6238 10.7248 11.2945 10.8926C10.9201 11.0833 10.4301 11.0833 9.45 11.0833H4.55C3.56991 11.0833 3.07986 11.0833 2.70552 10.8926C2.37623 10.7248 2.10852 10.4571 1.94074 10.1278C1.75 9.75343 1.75 9.26338 1.75 8.28329V4.66663Z"
                      fill="#5620C0"
                    />
                    <path
                      d="M1.75 4.66663C1.75 4.12303 1.75 3.85123 1.83881 3.63683C1.95722 3.35096 2.18434 3.12384 2.4702 3.00543C2.6846 2.91663 2.9564 2.91663 3.5 2.91663H4.86684C5.34371 2.91663 5.58215 2.91663 5.79655 3.00543C6.01095 3.09424 6.17955 3.26284 6.51675 3.60004L7.58333 4.66663H1.75Z"
                      fill="#5620C0"
                    />
                  </svg>
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
                        <MoveUp />
                        <span className="flex-1 text-[11px] text-ellipsis whitespace-nowrap overflow-hidden">
                          {annote.name}
                        </span>
                      </button>
                      <Button
                        onClick={() => moveToSelection(annote.id)}
                        className="flex flex-shrink-0 justify-center items-center hover:bg-black/[3%] p-1 hover:rounded-sm w-6 h-6"
                      >
                        <Search />
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

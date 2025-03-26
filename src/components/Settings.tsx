import * as React from "react";
import { AnnotationSettings } from "../types";
import { cn } from "@/lib/utils";

interface SettingsProps {
  settings: AnnotationSettings;
  onChange: (settings: AnnotationSettings) => void;
}

export const Settings: React.FC<SettingsProps> = ({ settings, onChange }) => {
  const handleColorChange = (color: string) => {
    onChange({ ...settings, color });
  };

  const handleFontSizeChange = (fontSize: "small" | "medium") => {
    onChange({ ...settings, fontSize });
  };

  const handleCardWidthChange = (cardWidth: "small" | "medium") => {
    onChange({ ...settings, cardWidth });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-24 text-muted-foreground">
          Color
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className={cn(
              "w-6 h-6 rounded-full bg-primary transition-all",
              settings.color === "#6E56CF" && "ring-2 ring-offset-2 ring-ring"
            )}
            onClick={() => handleColorChange("#6E56CF")}
            aria-label="Primary color"
          />
          <button
            type="button"
            className={cn(
              "w-6 h-6 rounded-full bg-secondary transition-all",
              settings.color === "#E54D2E" && "ring-2 ring-offset-2 ring-ring"
            )}
            onClick={() => handleColorChange("#E54D2E")}
            aria-label="Secondary color"
          />
          <button
            type="button"
            className={cn(
              "w-6 h-6 rounded-full bg-[#18794E] transition-all",
              settings.color === "#18794E" && "ring-2 ring-offset-2 ring-ring"
            )}
            onClick={() => handleColorChange("#18794E")}
            aria-label="Success color"
          />
          <button
            type="button"
            className={cn(
              "w-6 h-6 rounded-full bg-[#F76808] transition-all",
              settings.color === "#F76808" && "ring-2 ring-offset-2 ring-ring"
            )}
            onClick={() => handleColorChange("#F76808")}
            aria-label="Warning color"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-24 text-muted-foreground">
          Font size
        </span>
        <div className="flex items-center gap-0 border rounded-md overflow-hidden">
          <button
            type="button"
            className={cn(
              "px-3 py-1 text-sm transition-colors",
              settings.fontSize === "small"
                ? "bg-accent text-accent-foreground"
                : "hover:bg-accent/50"
            )}
            onClick={() => handleFontSizeChange("small")}
          >
            small
          </button>
          <button
            type="button"
            className={cn(
              "px-3 py-1 text-sm transition-colors",
              settings.fontSize === "medium"
                ? "bg-accent text-accent-foreground"
                : "hover:bg-accent/50"
            )}
            onClick={() => handleFontSizeChange("medium")}
          >
            medium
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-24 text-muted-foreground">
          Card width
        </span>
        <div className="flex items-center gap-0 border rounded-md overflow-hidden">
          <button
            type="button"
            className={cn(
              "px-3 py-1 text-sm transition-colors",
              settings.cardWidth === "small"
                ? "bg-accent text-accent-foreground"
                : "hover:bg-accent/50"
            )}
            onClick={() => handleCardWidthChange("small")}
          >
            small
          </button>
          <button
            type="button"
            className={cn(
              "px-3 py-1 text-sm transition-colors",
              settings.cardWidth === "medium"
                ? "bg-accent text-accent-foreground"
                : "hover:bg-accent/50"
            )}
            onClick={() => handleCardWidthChange("medium")}
          >
            medium
          </button>
        </div>
      </div>
    </div>
  );
};

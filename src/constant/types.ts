export type ActiveTab = "tts" | "stt";

export type VoiceGender = "female" | "male";

export type TtsEngine = "studio" | "browser";

export type PlaybackStatus = "idle" | "loading" | "playing" | "paused";

export interface LanguageOption {
  code: string;
  label: string;
  nativeName: string;
  sampleText: string;
}

export interface StudioVoice {
  id: "Kore" | "Zephyr" | "Puck" | "Charon" | "Fenrir";
  name: string;
  gender: VoiceGender;
  character: string;
}

export interface HistoryEntry {
  id: string;
  mode: ActiveTab;
  languageCode: string;
  languageLabel: string;
  text: string;
  createdAt: string;
}

export type ToastVariant = "success" | "info" | "error";

export interface ToastItem {
  id: string;
  message: string;
  variant: ToastVariant;
}

export interface ActivePanelActions {
  primaryAction: () => void;
  stopAction: () => void;
  downloadAction: () => void;
  copyAction: () => void;
}

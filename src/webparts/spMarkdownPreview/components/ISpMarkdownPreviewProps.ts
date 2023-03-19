export interface ISpMarkdownPreviewProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  isEditMode: boolean,
  markdownContent: string;
  updateData:(markdownData:string)=>void;
}

/// <reference types="..." />

export {};

declare global {
  interface IElectionApi {
    openDialog: () => Promise<any>
    startDrag: (fileName: string) => void
  }

  interface Window {
    electronAPI: any,
  }
}

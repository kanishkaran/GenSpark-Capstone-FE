import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule, DatePipe } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-file-summary-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    DatePipe
  ],
  templateUrl: './file-summary-dialog.html',
  styleUrl: './file-summary-dialog.css'
})
export class FileSummaryDialog {

  
  constructor(
    public dialogRef: MatDialogRef<FileSummaryDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  
  public get Time() : number {
    return Date.now()
  }
  

  copyToClipboard(): void {
    const summaryText = `File: ${this.data.file.fileName}\nCategory: ${this.data.file.category}\n\nSummary:\n${this.data.summary.summary}`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(summaryText).then(() => {
        // Could show a toast notification here
        console.log('Summary copied to clipboard');
      });
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = summaryText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  }
}
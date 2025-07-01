import { Component, OnInit } from '@angular/core';
import { FileArchiveService } from '../../services/fileUpload.service';
import { FileVersionService } from '../../services/fileVersion.service';
import { FileArchive } from '../../models/fileArchive.model';
import { FileVersion } from '../../models/fileVersion.model';

import { CommonModule, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, MatTableModule, MatBadgeModule, DatePipe],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  recentFiles: any[] = [];
  files: FileArchive[] = [];
  versions: FileVersion[] = [];

  summaryCards = [
    { title: 'Total Files', value: 0, icon: 'folder', color: 'bg-primary' },
    { title: 'Total Versions', value: 0, icon: 'layers', color: 'bg-info' },
    { title: 'Active Files', value: 0, icon: 'category', color: 'bg-success' },
    { title: 'Summarisable Files', value: 0, icon: 'summarize', color: 'bg-danger' },
  ];

  displayedColumns: string[] = [
    'fileName',
    'categoryName',
    'uploadedByName',
    'status',
    'latestVersion',
    'canSummarise'
  ];

  constructor(
    private fileArchiveService: FileArchiveService,
    private fileVersionService: FileVersionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.fileArchiveService.getAll({ page: 1, pageSize: 100, IncludeInactive: true }).subscribe((archiveRes: any) => {
      this.files = archiveRes.data.data?.$values || [];

      this.summaryCards[0].value = this.files.length;
      this.summaryCards[2].value = this.files.filter(f => !f.status).length;
      this.summaryCards[3].value = this.files.filter(f => f.canSummarise).length;

      this.fileVersionService.getAll().subscribe((versionRes: any) => {
        this.versions = versionRes.data?.$values || [];
        this.summaryCards[1].value = this.versions.length;

        this.buildRecentFiles();
      });
    });
  }

  private buildRecentFiles(): void {
    const enrichedFiles = this.files.map(file => {
      const versions = this.versions
        .filter(v => v.archiveId === file.id)
        .sort((a, b) => b.versionNumber - a.versionNumber);

      return {
        ...file,
        latestVersion: versions[0] || null
      };
    });

    this.recentFiles = enrichedFiles
      .filter(f => f.latestVersion)
      .sort((a, b) => {
        const aDate = new Date(a.latestVersion.createdAt || 0).getTime();
        const bDate = new Date(b.latestVersion.createdAt || 0).getTime();
        return bDate - aDate;
      })
      .slice(0, 10);
  }

  navigateToUpload(){
    this.router.navigate(['home', 'upload'])
  }

  navigateToFiles(){
    this.router.navigate(['home', 'user-category'])
  }
}

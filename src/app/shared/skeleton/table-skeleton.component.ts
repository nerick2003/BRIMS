import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton.component';

@Component({
  selector: 'app-table-skeleton',
  standalone: true,
  imports: [CommonModule, SkeletonComponent],
  template: `
    <table class="table table-skeleton" aria-busy="true" [attr.aria-label]="ariaLabel">
      @if (showHeader) {
        <thead>
          <tr>
            @if (showCheckbox) {
              <th scope="col"><span class="visually-hidden">Select</span></th>
            }
            @for (label of columnLabels; track label) {
              <th scope="col">{{ label }}</th>
            }
          </tr>
        </thead>
      }
      <tbody>
        @for (row of rowIndices; track row) {
          <tr>
            @if (showCheckbox) {
              <td>
                <app-skeleton variant="circle" width="18px" height="18px" />
              </td>
            }
            @for (width of columnWidths; track $index) {
              <td>
                <app-skeleton [width]="width" height="0.875rem" />
              </td>
            }
          </tr>
        }
      </tbody>
    </table>
  `,
  styles: [
    `
      .table-skeleton tbody td {
        padding-top: 0.85rem;
        padding-bottom: 0.85rem;
      }

      .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `,
  ],
})
export class TableSkeletonComponent {
  @Input() rows = 6;
  @Input() showCheckbox = false;
  @Input() showHeader = true;
  @Input() columnLabels: string[] = [];
  @Input() columnWidths: string[] = ['100%'];
  @Input() ariaLabel = 'Loading table';

  get rowIndices(): number[] {
    return Array.from({ length: this.rows }, (_, i) => i);
  }
}

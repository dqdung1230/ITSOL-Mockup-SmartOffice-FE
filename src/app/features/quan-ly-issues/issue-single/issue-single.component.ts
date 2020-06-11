import {Component, OnInit} from '@angular/core';
import {IssueService} from '../../../core/service/issue.service';
import {IssueModel} from '../model/issue.model';
import {ActivatedRoute, Router} from '@angular/router';
import {StatusService} from '../../../core/service/status.service';
import {StatusModel} from '../model/status.model';
import {IssueUpdateModel} from '../model/issueUpdate.model';
import {IssueHistoryModel} from '../model/issueHistory.model';

@Component({
    selector: 'smart-issue-single',
    templateUrl: './issue-single.component.html',
    styleUrls: ['./issue-single.component.css']
})
export class IssueSingleComponent implements OnInit {
    issues: IssueModel = new IssueModel;
    issueUpdate: IssueUpdateModel = new IssueUpdateModel;
    listIssueHistory: IssueHistoryModel[] = [];
    isUpdateClick = false;
    showHistory = false;
    listDonePercent: number [] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    listStatus: StatusModel[] = [];

    constructor(
        private issueService: IssueService,
        private route: ActivatedRoute,
        private statusService: StatusService,
    ) {
    }

    ngOnInit() {
        if (this.route.params != null) {
            const id = this.route.snapshot.params.issueId;
            this.issueService.getById(id).subscribe((res: any) => {
                if (res.responseCode === 1) {
                    this.issues = res.dataResponse;
                    this.getAllHistoryByIssueId(this.issues.id);
                }
            });
        }
        this.getAllStatusOfIssue();
    }

    getAllStatusOfIssue() {
        this.statusService.getByTypeId(1).subscribe((res: any) => {
            if (res.responseCode === 1) {
                this.listStatus = res.dataResponse;
            }
        });
    }

    getAllHistoryByIssueId(issueId: number) {
        this.issueService.getHistoryById(issueId).subscribe((res: any) => {
            if (res.responseCode === 1) {
                this.listIssueHistory = res.dataResponse;
                console.log(this.listIssueHistory);
            }
        });
    }

    handlerUpdate() {
        this.isUpdateClick = true;
    }

    handlerUnUpdate() {
        this.isUpdateClick = false;
    }

    doUpdate() {
        this.issueUpdate.id = this.issues.id;
        this.issueUpdate.updatePersonId = 1; //id employee fix cứng/
        console.log(this.issueUpdate);
        this.issueService.update(this.issueUpdate).subscribe((res => {
            if (res.responseCode === 1) {
                alert('cập nhật thành công!');
                this.isUpdateClick = false;
                this.ngOnInit();
            }
        }));
    }

    handlerOpenHistory() {
        this.showHistory = true;
    }

    handlerCloseHistory() {
        this.showHistory = false;
    }

    doComment() {
    }

    handlerStatusSelected(event: any) {
        console.log(event.target.value);
        this.issueUpdate.statusId = event.target.value;
    }

    handlerPercentSelected(event: any) {
        this.issueUpdate.donePercent = event.target.value;
    }
}

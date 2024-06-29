import { Account } from "@/features/account/account.model";
import { SubmissionResultTestcase } from "./submission-result-testcase";

export interface SubmissionResult {
  id: string;
  createdBy: Account;
  testcases: SubmissionResultTestcase[];
}

export interface Project {
  name?: string | undefined | null;
  pipelineNumber?: number | undefined| null;
  branchName?: string | undefined| null;
  status?: string | undefined| null;
  source?: string | undefined| null;
  createdAt?: string | undefined| null;
  updatedAt?: string | undefined| null;
  owner?: string | undefined| null;
  launchSinceSeconds?: number | undefined| null;
  waitingSinceSeconds?: number | undefined| null;
}

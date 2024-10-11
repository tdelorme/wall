import {Project} from "./project.model";

export interface GitlabProjectsResponse {
  'parent': Project[];
  'ged-api': Project[];
  'sed-api': Project[];
  'referentiel-api': Project[];
  'editique': Project[];
  'cms-api': Project[];
  'commons': Project[];
  'mail-api': Project[];
  'ecrm-api': Project[];
  'extranet-gateway': Project[];
  'universign-api': Project[];
  'service-api': Project[];
  'app.webservices': Project[];
}

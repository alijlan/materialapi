using { materialapi as mat } from '../db/mat-db.cds';

service MaterialService {
    entity Materials as projection on mat.Materials;
}

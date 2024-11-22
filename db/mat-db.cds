namespace materialapi;

using { API_MATERIAL_STOCK_SRV as mss } from '../srv/external/API_MATERIAL_STOCK_SRV.csn';

entity Materials as projection on mss.A_MaterialSerialNumber {
    key Material,
    key SerialNumber,
    Plant,
    StorageLocation
}
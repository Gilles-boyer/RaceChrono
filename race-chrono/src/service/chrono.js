import api from "./api";

export default {
    getPilotes() {
        return api.get(`BGGQ5348CKSYJNUOHGZT0HXAOHDV0PA3`);
    },
    getClassementGeneral() {
        return api.get(`0VHTU1F3XBXS6KCAPNWEGJMUH5D205SW`);
    },
    getSessionLive() {
        return api.get(`OMKURXPGH2RZ98JAPHUJMFTP9RA2OJXD`);
    },
    getResultSessionLive(sessionNumber) {
        if (sessionNumber == 1) {
          return api.get(`LPK3SKP13VYLWPXCHE86TGRZOVD413K6`);
        } else if (sessionNumber == 9) {
          return api.get(`EKL7MC5M6J0I019TDOB7BQJM297XH9UM`);
        } else if (sessionNumber == 10) {
          return api.get(`U7K0D3VKB3HBDS9Q6C0AQBMAYGFNZOKJ`);
        } else if (sessionNumber == 11) {
          return api.get(`IWU92B1KCBVZ3CKMUR14RH7E9SIGXJKJ`);
        } else if (sessionNumber == 12) {
          return api.get(`VL91QBV22Q8MA52SA4N74RRK1RCI9RCI`);
        } else if (sessionNumber == 13) {
          return api.get(`4BO8DU1GDIH1YUX1ORC3BMH6HS4LJ8DT`);
        } else if (sessionNumber == 14) {
          return api.get(`VAB1XD0HMW6JXXK6OOZ45XYJOZA1WBLH`);
        } else if (sessionNumber == 15) {
          return api.get(`V7NUZBIG4C09PO1OORQV229MJD5VAB3V`);
        } else if (sessionNumber == 16) {
          return api.get(`26YN7O5Z63YR1OABCJWEEWXIMHQFUTVZ`);
        } else if (sessionNumber == 17) {
          return api.get(`3VRHGRH4BS50WWFF35VEEJ975SGLWXSE`);
        } else if (sessionNumber == 18) {
          return api.get(`YY3BI21WCLX2MZVBZ6P753FHWT53IMTW`);
        } else if (sessionNumber == 19) {
          return api.get(`IXCHWMGALLJ6YSPLRZZ1X3NSBC5V9HIZ`);
        } else if (sessionNumber == 20) {
          return api.get(`2ZR36VU97RMTL4NTW11S8CE88VF8WBOA`);
        } else if (sessionNumber == 1) {
          return api.get(`LPK3SKP13VYLWPXCHE86TGRZOVD413K6`);
        } else if (sessionNumber == 2) {
          return api.get(`OXQRGKZ4U8DISBW7GPRJGYUUQTH0ERZD`);
        } else if (sessionNumber == 3) {
          return api.get(`DOSLZSLAM9VF0355BOZKDLSODVM3MS9F`);
        } else if (sessionNumber == 4) {
          return api.get(`3LKQEI7EWSUHGUR7HPM55195JTGS7GFW`);
        } else if (sessionNumber == 5) {
          return api.get(`L4AZX3LCE3SEN09357ONEC4VO9UL194X`);
        } else if (sessionNumber == 6) {
          return api.get(`KBYFGH0SXRV72RJJDKLGQ32XQEJRVRI7`);
        } else if (sessionNumber == 7) {
          return api.get(`J0XIT4SV7709FCG4TBHQH97YO3W93LYE`);
        } else if (sessionNumber == 8) {
          return api.get(`446DZ47QYQ3T49KQ8JG20TUFXPMZN2O6`);
        } 
    }
} 
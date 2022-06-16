import {Authority} from './Authority';

export class AuthorityUtils {
    static hasAuthority = function (authority: Authority, currentUser) {
        if (currentUser != null && currentUser.authorities != null) {
            for (let i = 0; i < currentUser.authorities.length; i++) {
                if (currentUser.authorities[i].name === authority) {
                    return true;
                }
            }
        }
        return false;
    };

    static isOnlyEmployee = function (currentUser) {
        // console.log(currentUser.authorities);
        if (currentUser != null && currentUser.authorities != null && currentUser.authorities.length == 1) {
            if (currentUser.authorities[0].name === Authority.USER) {
                return true;
            }
        }
        return false;
    };

    static isAccessToApp = function (currentUser) {
        return true;
        // if (currentUser != null && currentUser.authorities != null && currentUser.authorities.length > 0) {
        //     if (currentUser.authorities[0].name === Authority.USER
        //         || currentUser.authorities[0].name === Authority.ADMIN) {
        //         return true;
        //     }
        // }
        // return false;
    };
}

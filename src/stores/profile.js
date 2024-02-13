import {defineStore} from 'pinia'


export const useProfileStore = defineStore('profileStore', {

    actions: {
        saveInLocalStorage(items){
            localStorage.setItem("profile", JSON.stringify(items));
        },
//======================================================================================================================
        getItems(){
            try {
                const r = localStorage.getItem("profile");
                if (r === null || r === undefined) {
                    throw new Error("Profile data not found in localStorage");
                }
                return r;
            } catch (error) {
                return error;
            }
        },
//======================================================================================================================
        Rtl(){
            const getItem=this.getItems()
            const locale =JSON.parse(getItem)
            if(locale[0].locale === 'fa'){
                return 'rtl'
            }else {
                return 'ltr'
            }
        }
    }
})
export const ActionTypes = {
    SOMETHING : "SOMETHING"
}

export const Actions = {
    something : function() {
        return { 
            type: ActionTypes.SOMETHING
        }
    }
};
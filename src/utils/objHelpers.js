

export const updateObjArray = (items, itemId, ObjPropName, newObjProps) =>{
   return  items.map(e => {if (e[ObjPropName] === itemId) {
        return {...e, ...newObjProps}
    }
    return e;
    });
};
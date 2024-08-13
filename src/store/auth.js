// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//     catagroy : [{id: 1 , title : "add more " , content : "add widget useing this" , showState : true}]
// }

// export const widgetSlice = createSlice({
//     name : 'catagroy' ,
//     initialState ,
//     reducers : {
//         addWidget : (state , action)=>{
//             const catagroy = {
//                 id : nanoid(),
//                 title : action.payload ,
//                 content : action.payload ,
//                 showState : action.payload
//             }
//             state.catagroy.push(catagroy)
//         } , 
//         removeWidget : (state , action) =>{
//            state.catagroy = state.catagroy.filter((cat)=> cat.id !== action.payload)
//         }
//     }
// })

// export const {addWidget , removeWidget} = widgetSlice.actions

// export default widgetSlice.reducer


import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {

    categories: [
      {
        id : 'category1',
        name : "CSPM Executive DashBoard",
        widget : []
      },
      {
        id : 'category2',
        name : "CWPP DashBoard",
        widget : [{id : 1 , title : "add by auth " , content : "jsdkfjskdfjkjs" }]
      },
      {
        id : 'category3',
        name : "Registry Scan",
        widget : []
      }
    ]
}

export const widgetSlice = createSlice({
    name : 'categories' ,
    initialState ,
    reducers : {
         addWidgetToCategory : (state , action) =>{
            const { categoryId, title , content , showState} = action.payload ;
            const category = state.categories.find(cat => cat.id === categoryId)
            if(category){
                const addWidget ={
                    id : nanoid() ,
                    title ,
                    content ,
                    showState
                };
                category.widget.push(addWidget);
            }
         },
         removeWidgetFromCategory : (state , action)=>{
            const {categoryId , widgetId} = action.payload ;
            state.categories = state.categories.map(category => {
                if (category.id === categoryId) {
                    return {
                        ...category,
                        widget: category.widget.filter(widget => widget.id !== widgetId)
                    };
                }
                return category;
            });
         }
    }
})

export const {addWidgetToCategory , removeWidgetFromCategory} = widgetSlice.actions

export default widgetSlice.reducer
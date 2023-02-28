import rootReducer from "../rootReducer";

const myLogger = (store) => (next) => (action)=>{
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);

    const upcoming = [action].reduce(rootReducer, store.getState());

    console.log(`Upcoming: ${JSON.stringify(upcoming)}`);
    return next(action);
    
}
export default myLogger;
import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';

export const populateProduce = () => {
    // debugger
    return {
        type: POPULATE,
        produce: produceData
    }
}

function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE: {
            const newState = {};
            action.produce.forEach((produce) => {
                newState[produce.id] = produce
            });
            // debugger
            return newState;
        }
        default: 
            // debugger
            return state;
    }
}

export default produceReducer;
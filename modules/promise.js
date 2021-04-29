function useCallback() {

    const serveFriedRice = () => {
        console.log('serve the fried rice');
    }

    const cookingFriedRice = (callback) => {
        
        console.log('cooking fried rice is started');
        console.time('cooking took time');

        for(let x = 0; x < 1000000; x++) {
            // imagine it's a long / asynchronous process
        }

        console.timeEnd('cooking took time');
        console.log('cooking is done');
        
        callback();
    }

    cookingFriedRice(serveFriedRice);
    
}

function usePromise() {

    const cookingFriedRice = new Promise(function(resolve, reject) {
        
        console.log('cooking fried rice is started');
        let cookingDone = true; // imagine it's the result of async process

        if(cookingDone) {
            resolve('cooking is done');
        }
        else {
            reject('cooking canceled');
        }

    });

    console.log(cookingFriedRice);

    return cookingFriedRice;
}

export { useCallback, usePromise };
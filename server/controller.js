const db = require('./db.json');
const bm = require('./bm.json')
let globalID = 2

module.exports = {
    getCompliment: ("/api/compliment", (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
        ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        
    }),
    getFortune: ("/api/fortune", (req, res) => {
        const fortunes = ["The force is strong with you.",
                           "A disturbance in the force, I sense in your future.",
                           "You will see someone today.",
                           "You will breathe again very soon.",
                           "Do or do not, there is no try.",
                           "When in doubt, just give up.",
        ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
        
    }),
    sendBM: ("/api/bm", (req, res) => {
        res.status(200).send(bm)
    }),
    editBM: ("/api/bm-edit", (req, res) => {
        let x = req.body
        // console.log(x);
        // console.log('hit put server');

        let {BMType, sids} = req.body

        const update = {
            BMType,
            sids
        }

        console.log(update);

        for(let i = 0; i < bm.length; i++){
            // let {BMType, sids} = bm
            // console.log(bm[i])
            // console.log(update.BMType, '=?', bm[i].BMType)
            

            if(bm[i].BMType === update.BMType){
                // console.log(bm[i].BMType)
                // console.log(bm[i].SIDs)

                let currentSIDs = bm[i].SIDs
                // console.log(currentSIDs);
                currentSIDs = update.sids
                // console.log(currentSIDs);

                bm[i].SIDs = update.sids
                console.log(bm[i].SIDs)

                // return console.log('success')
            }else{
                console.log('nope');
            }
        }

        res.status(200).send(bm)
    }),
    deleteBM: ("/api/bm-delete", (req, res) => {
        console.log('hit delete');

        let {BMType} = req.body
        let x = BMType

        // const update = {
        //     BMType
        // }

        console.log(BMType);

        for(let i = 0; i < bm.length; i++){
            // let {BMType, sids} = bm
            // console.log(bm[i])
            // console.log(update.BMType, '=?', bm[i].BMType)
            

            if(bm[i].BMType === BMType){
                // console.log(bm[i].BMType)
                // console.log(bm[i].SIDs)

                // let currentSIDs = bm[i].SIDs
                // console.log(currentSIDs);
                // currentSIDs = update.sids
                // console.log(currentSIDs);

                bm[i].SIDs = null
                console.log(bm[i].SIDs)
                console.log(bm[i])
                console.log(bm)
                // return

                // return console.log('success')
            }else{
                console.log('nope');
            }
        }

        res.status(200).send(bm)
    }),
    createSIDs: ("/api/raw", (req, res) => {
        const {sids} = req.body
        console.log(sids);


        let newSubmit = {
            id: globalID,
            sids: sids
        }

        db.push(newSubmit)
        globalID++

        console.log('hit createSIDs');

        console.log(db);
        res.status(200).send(db);
    })    
}


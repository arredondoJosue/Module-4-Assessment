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
    createSIDs: ("/api/raw", (req, res) => {
        const MAGIC = ['S1','S2','S3']
        const DEI = ['S4','S5','S6']
        let {id, select, sids} = req.body
        let newSubmit = {
            id: globalID,
            select,
            sids
        }
        db.push(newSubmit)     
        res.status(200).send(db);
        globalID++
    }),
    sendBM: ("/api/bm", (req, res) => {
        res.status(200).send(bm)
    })
}


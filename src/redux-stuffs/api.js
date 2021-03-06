


export default  {
    //api calls
   apiCall: {
       //getting fixtures
    getFixtures: () => {
        const request = {
            method: "GET",
            
            
        }
       
        return fetch(" https://allsportsapi.com/api/football/?met=Fixtures&APIkey=49e81e11fdb7408af56511fad125553a451a5eb9879e37135f3487b3ecb6ed87&from=2020-02-17&to=2020-02-18",request).then(res => {
            
            return res.json()
        }).catch(err => console.log(err))
    
    },
    getTables: () => {
        //getting table standings
        const request = {
            method: "GET",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                   
            }
        }
        return fetch("https://allsportsapi.com/api/football/?&met=Standings&leagueId=148&APIkey=49e81e11fdb7408af56511fad125553a451a5eb9879e37135f3487b3ecb6ed87",request).then(res => {
           
            return res.json()
        }).catch(err => console.log(err))
    
    },
    //getting livescores
    getHighlights: () => {
        const request = {
            method: "GET",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                   
            },                                                                                                      
            
        }
        return fetch("https://allsportsapi.com/api/football/?met=Livescore&APIkey=49e81e11fdb7408af56511fad125553a451a5eb9879e37135f3487b3ecb6ed87",request).then(res => {
            
            return res.json()
        }).catch(err => console.log(err))
    
    }
   }
}
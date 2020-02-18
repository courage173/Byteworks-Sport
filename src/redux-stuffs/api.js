


export default  {
   apiCall: {
    getFixtures: () => {
        const request = {
            method: "GET",
            
            
        }
       
        return fetch(" https://allsportsapi.com/api/football/?met=Fixtures&APIkey=49e81e11fdb7408af56511fad125553a451a5eb9879e37135f3487b3ecb6ed87&from=2019-05-23&to=2019-05-23",request).then(res => {
            
            return res.json()
        }).catch(err => console.log(err))
    
    },
    getTables: () => {
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
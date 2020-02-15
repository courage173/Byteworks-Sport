


export default  {
   apiCall: {
    getFixtures: () => {
        const request = {
            method: "GET",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',  
                "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
                "x-rapidapi-key": "71ab4a1b23msh3f94df69d4af905p1808bejsn36de4a1a49e1"
                   
            },
            
        }
        return fetch("https://api-football-beta.p.rapidapi.com/fixtures?season=2020&date=2020-02-06",request).then(res => {
            
            return res.json()
        }).catch(err => console.log(err))
    
    },
    getTables: () => {
        const request = {
            method: "GET",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',  
                "x-rapidapi-host":  "api-football-beta.p.rapidapi.com",
                "x-rapidapi-key": "71ab4a1b23msh3f94df69d4af905p1808bejsn36de4a1a49e1"
                   
            },                                                                                                    
            
        }
        return fetch("https://api-football-beta.p.rapidapi.com/standings",request).then(res => {
            
            return res.json()
        }).catch(err => console.log(err))
    
    },
    getHighlights: () => {
        const request = {
            method: "GET",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',  
                "x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com",
                "x-rapidapi-key": "71ab4a1b23msh3f94df69d4af905p1808bejsn36de4a1a49e1"
                   
            },                                                                                                      
            
        }
        return fetch("https://free-football-soccer-videos.p.rapidapi.com/",request).then(res => {
            
            return res.json()
        }).catch(err => console.log(err))
    
    }
   }
}



export default  {
   apiCall: {
    getFixtures: () => {
        const request = {
            method: "GET",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',  
                "x-rapidapi-host": "stroccoli-futbol-science-v1.p.rapidapi.com",
                "x-rapidapi-key": "71ab4a1b23msh3f94df69d4af905p1808bejsn36de4a1a49e1"
                   
            },
            
        }
        return fetch("https://stroccoli-futbol-science-v1.p.rapidapi.com/s2/live",request).then(res => {
            
            return res.json()
        }).catch(err => console.log(err))
    
    },
    getTables: () => {
        const request = {
            method: "GET",
            mode: 'no-cors',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',  
              
                   
            },                                                                                                    
            
        }
        return fetch("http://livescore-api.com/api-client/leagues/table.json?key=EOZtBfnB1RzKD08x&secret=zmG1mJ3MTo6x2G2Gv196gxIhoh22iazS&league=25&season=2",request).then(res => {
           
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
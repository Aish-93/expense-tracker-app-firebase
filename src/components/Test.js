import React from 'react'

function Test() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '86b21660e6msh97f6e9ae79e268bp19c8d0jsnb4c4363bd6d0',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    fetch("https://deezerdevs-deezer.p.rapidapi.com/infos",options).then((result)=>{
        result.json().then((resp)=>{
            console.log(resp)
        }).catch(err => console.error(err));
    })
  return (
    <div>Test</div>
  )
}

export default Test
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTRhNWIzMGYwMWYxNjExNjc1NjkwMWM3NWZkMjYzYSIsIm5iZiI6MTc1OTUxNDIwMy4xOTkwMDAxLCJzdWIiOiI2OGUwMGU1YmYxMzY3Njg4NzNhYTVjNDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FiqYhOPavsBBWX7UPWpfKA94Ly0nuDoZ1DrgSpXMuC8'
  }
};

export const  API_options = options;


// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTRhNWIzMGYwMWYxNjExNjc1NjkwMWM3NWZkMjYzYSIsIm5iZiI6MTc1OTUxNDIwMy4xOTkwMDAxLCJzdWIiOiI2OGUwMGU1YmYxMzY3Njg4NzNhYTVjNDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FiqYhOPavsBBWX7UPWpfKA94Ly0nuDoZ1DrgSpXMuC8'
//   }
// };

// fetch('https://api.themoviedb.org/3/movie/changes?page=1', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
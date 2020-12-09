

let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let domain = ['.com' , '.es'];

//-------------------------1 FORMA---------------------------------------

//function crearDominio(arreglo)
//{
  //  let result = "";
    //for(i = 0; i <arreglo.length;i++)
    //{
      //  result += arreglo[i];
    //}
      //  return result;
//}


//for(let k in pronoun)
//{
  //  for (let h in adj)
    //{
      //  for (let p in noun)
        //{
          //  for(let u in domain)
            //{
               
              //  let arreglofinal=[];
                //arreglofinal.push(pronoun[k]);
                //arreglofinal.push(adj[h]);
                //arreglofinal.push(noun[p]);
                //arreglofinal.push(domain[u]);
                //console.log(crearDominio(arreglofinal));
            //}
        //}
    //}
//}

//-------------------------2 FORMA---------------------------------------

for(let k in pronoun)
{
    for (let h in adj)
    {
        for (let p in noun)
        {
            for(let u in domain)
            {
                console.log(pronoun[k] + adj[h] +noun[p] + domain[u]);
               
            }
        }
    }
}

//-------------------------3 FORMA---------------------------------------

//for( i =0; i < pronoun.length; i++)
//{
 //   for(x=0;x<adj.length;x++)
   // {
     //   for(y=0; y<noun.length;y++)
      //{
        //for(t=0; t<domain.length;t++)
        //{
         //console.log(  pronoun[i] + adj[x] +noun[y] + domain[t]  );
        //}
      //}
    //} 
//}



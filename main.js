function rot13(str) {
    let solved = "";

    for(let i = 0; i < str.length; i++)
    {
        let num = (str[i].charCodeAt());
        if(num >= 65 && num <= 77)
        {
            solved += String.fromCharCode(num + 13);
        } else if(num >= 78 && num <= 90) 
        {
            solved += String.fromCharCode(num - 13)
        } else 
        {
            solved += str[i];
        }
    }
    return solved;
  }
  
  // a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z

var isValid = function(s) {
    
    const stack = []

    const chars = s.split("");

    const len = chars.length;
    for (let i = 0; i < len; i++) {
        if (i === 0) 
            stack.push(chars[i])
        else if (stack[stack.length - 1] === "(" && chars[i] === ")") 
            stack.pop()
        else if (stack[stack.length - 1] === "{" && chars[i] === "}") 
            stack.pop()
        else if (stack[stack.length - 1] === "[" && chars[i] === "]") 
            stack.pop()
        else
            stack.push(chars[i])
    }

    if (stack.length === 0)
        return true;
    else 
        return false;

};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    const core = []
    const set = new Set();

    for(let i = 1; i <= n; i++) {
        core.push("(")
        core.push(")")
    }

    console.log(perm(core).join("\n"));

};

function perm(xs) {
    let ret = [];
  
    for (let i = 0; i < xs.length; i = i + 1) {
      let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
  
      if(!rest.length) {
        ret.push([xs[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([xs[i]].concat(rest[j]))
        }
      }
    }

    return ret;
}
  



generateParenthesis(8);


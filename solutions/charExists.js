function charExist(str,char) {
    //trivial solution: the first char of the string and char are the same
    if(char===str[0]){
        return true;
    }
    //non-trivial solution: remove the first char and call again
    if(str.length!=0){
        charExist(str.substring(1),char);
    }
    //If lenght turns to 0 then return false
    return false;
}
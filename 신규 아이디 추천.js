function solution(new_id) {
    const spe_char = /[`~!@#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/ ]/gim;
    const dup_dot = /\.+(?=\.)/g;
    const first_dot = (/^\./);
    const last_dot = (/\.$/);

    let result = new_id.toLowerCase()
            .replace(spe_char, '')
            .replace(dup_dot, '')
            .replace(first_dot, '')
            .replace(last_dot, '');

    if (result === ''){
        result ='a';
    }

    result = result.substr(0,15).replace(last_dot, '');

    if (result.length === 1){
        result = result.repeat(3);
    } else if (result.length === 2){
        result += result.charAt(1)
    }

    return result;
}

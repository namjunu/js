function cat(){
    this.name = "";
    this.age = 1;
    this.weight = 500;
    this.family = "페르시아고양이";
    this.color = "흰색";
}

var kitty = new cat();
kitty.name = "야옹이";
kitty.age = 2;
kitty.weight = 500;
kitty.family = "사향고양이";
kitty.color = "갈색";

dw(kitty.name);
br();
dw(kitty.age);
br();
dw(kitty.weight);
br();
dw(kitty.family);
br();
dw(kitty.color);
br();
br();

var yaongi = new cat();
yaongi.name = "키티";
yaongi.age = "3";
yaongi.weight = 1200;
yaongi.family = "먼치킨";
yaongi.color = "흰색";

dw(yaongi.name);
br();
dw(yaongi.age);
br();
dw(yaongi.weight);
br();
dw(yaongi.family);
br();
dw(yaongi.color);
br();
br();

if( yaongi.age > kitty.age ){
    dw("형님 고양이 : " + yaongi.name );
    br();
    dw("동생 고양이 : " + kitty.name );
    br();
} else if ( yaongi.age < kitty.age ){
    dw("형님 고양이 : " + kitty.name );
    br();
    dw("동생 고양이 : " + yaongi.name );
    br();
} else {
    dw("둘은 친구임");
}

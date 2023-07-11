import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../../user/user.service';

@Injectable()
export class AuthService { 

    constructor(private usersService: UsersService,
                private jwtService: JwtService ){

    }

async validateUser(id, userLogin: string, userPassword: string){
  console.log(id);
    const user = await this.usersService.getByLogin(userLogin);
    const crypto = require('crypto');
    userPassword = crypto.createHash('sha256').update(userPassword).digest('hex');
    if(user && user.password == userPassword){
        const {id, nome, login} = user;
        return {id, nome, login};
    }
    return null;
}

async login(id, user: any) {
    const payload = { login: user.login, id: user.id , nome: user.nome};
    return {
      access_token: this.jwtService.sign(payload),
      name: user.nome,
      companyId: user.companyId
    };
  }

}

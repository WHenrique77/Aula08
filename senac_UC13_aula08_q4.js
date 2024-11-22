function comAcesso(usuario) {
    return (usuario.idade > 18||usuario.Adm) && !usuario.isBlocked;
  }
  
  console.log(comAcesso({ idade: 20, isAdmin: false, isBlocked: false })); 
  console.log(comAcesso({ idade: 16, isAdmin: true, isBlocked: true })); 
  
  /**
   * 
   * A função verifica se o usuário pode acessar o sistema. 
   * 
   * @exemplo
   *    exemplo (18); // pode acessar. 
   */

// it('should be able to create a new player for an org', async done => {
//     const superApp = supertest(app);
//     const { token, user } = await createUserGenerateToken();
//     await Organization.create({ name: 'Sample Org', logoLink: '', users: [user] }).save();
  
//     const result = await superApp
//       .post('/api/players')
//       .set('Cookie', [`jwt=${token}`])
//       .send({ nickname: 'Jarek', accounts: { twitch: 'wojonatior' } });
  
//     expect(result.status).toEqual(200);
//     expect(result.body).toHaveProperty('id');
//     expect(result.body.nickname).toBe('nshue');
//     expect(result.body.twitchUsername).toBe('nshue');
//     const org = await Organization.findOneOrFail({ name: 'Sample Org' }, { relations: ['players'] });
//     expect(org.players.length).toEqual(1);
//     expect(org.players[0].nickname).toEqual('nshue');
//     done();
//   });
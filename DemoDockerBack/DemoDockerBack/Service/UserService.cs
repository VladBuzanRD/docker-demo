using AutoMapper;
using DemoDockerBack.Domain;
using DemoDockerBack.Persistence;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace DemoDockerBack.Service
{
    public class UserService: IUserService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public UserService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<UserDto> LoginAsync(UserDto entity)
        {
            var user = _mapper.Map < User > (await _context.Users.SingleOrDefaultAsync(x => x.Username == entity.Username && x.Password == entity.Password));

            return _mapper.Map<UserDto>(user);
        }

        public async Task<UserDto> RegisterAsync(UserDto entity)
        {
            var exists = await _context.Users.AnyAsync(x => x.Username == entity.Username);

            if (!exists)
            {
                var user = _mapper.Map<User>(entity);
                await _context.Users.AddAsync(user);
                await _context.SaveChangesAsync();
                return _mapper.Map<UserDto>(user);
            }
            return null;
        }
    }
}
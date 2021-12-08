using DemoDockerBack.Domain;
using System.Threading.Tasks;

namespace DemoDockerBack.Service
{
    public interface IUserService
    {
        Task<UserDto> RegisterAsync(UserDto entity);
        Task<UserDto> LoginAsync(UserDto entity);
    }
}

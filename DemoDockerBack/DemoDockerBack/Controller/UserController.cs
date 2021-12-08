using AutoMapper;
using DemoDockerBack.Domain;
using DemoDockerBack.Models;
using DemoDockerBack.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DemoDockerBack.Controller
{
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _service;
        private readonly IMapper _mapper;

        public UserController(IUserService service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        [HttpPost("register")]
        [Produces("application/json")]
        [ProducesResponseType(typeof(UserViewModel), StatusCodes.Status200OK)]
        public async Task<IActionResult> RegisterAsync([FromBody] RegisterUserModel model)
        {
            var result = await _service.RegisterAsync(_mapper.Map<RegisterUserModel, UserDto>(model));
            return Ok(_mapper.Map<UserDto, UserViewModel>(result));
        }

        [HttpPost("login")]
        [Produces("application/json")]
        [ProducesResponseType(typeof(UserViewModel), StatusCodes.Status200OK)]
        public async Task<IActionResult> LoginAsync([FromBody] LoginUserModel model)
        {
            var result = await _service.LoginAsync(_mapper.Map<LoginUserModel, UserDto>(model));
            return Ok(_mapper.Map<UserDto, UserViewModel>(result));
        }
    }
}
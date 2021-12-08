using AutoMapper;
using DemoDockerBack.Domain;
using DemoDockerBack.Models;

namespace DemoDockerBack
{
    public class UserProfile:Profile
    {
		public UserProfile()
		{
			CreateMap<LoginUserModel, UserDto>();
			CreateMap<RegisterUserModel, UserDto>();
			CreateMap<UserDto, UserViewModel>();
			CreateMap<UserDto, UserViewModel>();
			CreateMap<UserDto, User>().ReverseMap();
		}
	}
}

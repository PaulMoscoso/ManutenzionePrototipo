namespace Manutenzioni.Application.Exceptions
{
    public class NotFoundExceptionGetList : ApplicationException
    {
        public NotFoundExceptionGetList(string nameClass) : base($"Entity \"{nameClass} \" not fount")
        {

        }

    }
}

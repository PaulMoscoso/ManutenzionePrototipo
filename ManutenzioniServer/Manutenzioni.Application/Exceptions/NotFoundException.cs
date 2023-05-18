namespace Manutenzioni.Application.Exceptions
{
    public class NotFoundException :ApplicationException
    {
        public NotFoundException(string nameClass, object keyRow) : base($"Entity \"{nameClass} \" ({keyRow}) not fount")
        {

        }
    }
}

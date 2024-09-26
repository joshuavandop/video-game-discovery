import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={1} fontSize="lg">
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

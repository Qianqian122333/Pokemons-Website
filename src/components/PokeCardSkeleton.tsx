import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const PokeCardSkeleton = () => {
  return (
    <Card borderRadius={10}>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default PokeCardSkeleton;

package ma.fstt.springjwt.repository;

import java.util.Optional;

import ma.fstt.springjwt.models.ERole;
import ma.fstt.springjwt.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}

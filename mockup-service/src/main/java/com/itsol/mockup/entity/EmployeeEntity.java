package com.itsol.mockup.entity;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "employee")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@FieldDefaults(level = AccessLevel.PRIVATE)

public class EmployeeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "AUTO_INCRE_SEQ_EMPLOYEE")
    @SequenceGenerator(name = "AUTO_INCRE_SEQ_EMPLOYEE", sequenceName = "AUTO_INCRE_SEQ_EMPLOYEE", allocationSize = 1)
    Long id;

    @Column(name = "username", nullable = false)
    String username;

    @Column(name = "password", nullable = false)
    String password;

    @Column(name = "fullname", nullable = false)
    String fullName;

    @Column(name = "image_url")
    String imageUrl;

    @Column(name = "last_access", nullable = false)
    Date lastAccess;

    @Column(name = "created_date", nullable = false)
    Date createdDate;

    @Column(name = "email", nullable = false, unique = true)
    String email;

    @Column(name = "phone_number")
    String phoneNumber;

    @Column(name = "skype_account", nullable = false, unique = true)
    String skypeAccount;

    @Column(name = "user_type", nullable = false)
    String userType;

    @Column(name = "address")
    String address;

    @Column(name = "university")
    String university;

    @Column(name = "is_leader")
    Boolean isLeader;

    @Column(name = "graduated_year")
    Number graduatedYear;

    @Column(name = "is_manager")
    Boolean isManager;

    @Column(name = "is_actived")
    Boolean isActived;

    @Column(name = "birthday")
    Date birthday;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "position_id", nullable = false)
    PositionEntity positionEntity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id", nullable = false)
    TeamEntity teamEntity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id", nullable = false)
    DepartmentEntity departmentEntity;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "EMPLOYEE_ROLE",
            joinColumns = @JoinColumn(name = "EMPLOYEE_ID"),
            inverseJoinColumns = @JoinColumn(name = "ROLE_ID")
    )
    Set<RoleEntity> roleEntities;

}

package com.challenge15.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "aluno")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AlunoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_aluno")
    private Long id;

    @Column(name = "nome_aluno")
    private String nome;
    @Column(name = "email_aluno")
    private String email;

    @JsonIgnore
    @ManyToMany
    @JoinTable(name = "Alunos_Cursos",
                joinColumns = @JoinColumn(name = "id_aluno"),
                inverseJoinColumns = @JoinColumn(name = "id_cargo")
    )
    private Set<CursoEntity> cursos;
}
